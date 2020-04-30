import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gameAction } from "../Store/actions";

const GameForm = () => {
  let [gameType, setGameType] = useState("");
  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(gameAction(gameType));
    e.preventDefault();
    setGameType("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group row mt-5">
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control form-control-lg"
              required
              value={gameType}
              onChange={(e) => setGameType(e.target.value)}
              placeholder="Enter Your Game Type Allowed Values  V75, V65, V64, V4"
            />
          </div>
          <button
            type="submit"
            className="col col-sm-3  btn btn-lg btn-primary"
          >
            Get Game
          </button>
        </div>
      </form>
    </div>
  );
};

export default GameForm;
