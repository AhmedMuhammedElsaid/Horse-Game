import actionTypes from "../Constants";


export const gameAction = (gameType) => {
  return (dispatch) => {
    fetch(`https://www.atg.se/services/racinginfo/v1/api/products/${gameType}`)
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        // check if there's Upcoming or not so that we use Result id to fitch our data
        const array = data.upcoming ? data.upcoming : data.results;
        let closest = array[0].id;

        fetch(` https://www.atg.se/services/racinginfo/v1/api/games/${closest}`)
          .then((res) => {
            const dataFetched = res.json();
            return dataFetched;
          })
          .then((dataFetched) => {
            dispatch({
              type: actionTypes.FETCH_GAME_DATA_SUCCESS,
              data: dataFetched.races,
              gameType: gameType,
            });
          })
          .catch((err) => {
            dispatch({ type: actionTypes.FETCH_GAME_DATA_FAILURE, err });
          });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.FETCH_GAME_DATA_FAILURE, err });
      });
  };
};
