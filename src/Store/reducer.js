import actionTypes from "../Constants";

let initialState = {
  gameType: "",
  races: {},
  err: "",
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GAME_DATA_REQUEST:
      return {
        ...state,
      };

    case actionTypes.FETCH_GAME_DATA_SUCCESS:
      return {
        ...state,
        gameType: action.gameType,
        races: action.data,
      };
    case actionTypes.FETCH_GAME_DATA_FAILURE:
      return {
        ...state,
        err: action.err,
      };

    default:
      return state;
  }
};

export default gameReducer;
