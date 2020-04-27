import React from "react";
import { useSelector } from "react-redux";
import Races from "./Races";

export default function GameDetails() {
  let data = useSelector((state) => state);
  let renderData = data.races.length
    ? data.races.map((item) => {
        return <Races item={item} />;
      })
    : null;

  return data.races.length ? (
    <table className="table table-hover my-5 py-5">
      <thead>
        <tr>
          <th scope="col">Game Type</th>
          <th scope="col">Race Name</th>
          <th scope="col">Race Number</th>
          <th scope="col">Race Start Time</th>
          <th scope="col">Starts</th>
        </tr>
      </thead>
      <tbody>{renderData}</tbody>
    </table>
  ) : null;
}
