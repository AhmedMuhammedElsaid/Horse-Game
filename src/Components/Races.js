import React from "react";
import { useSelector } from "react-redux";
import uuid from "uuid/v4";
import Starts from "./Starts";

export default function Races({ item }) {
  const gameType = useSelector((state) => state.gameType);
  return (
    <>
      <tr key={uuid()}>
        <td style={{ width: "10%" }}>{gameType}</td>
        <td style={{ width: "30%" }}>
          {item.name ? (
            item.name
          ) : (
            <b className="bg-danger">
              There is no name available in this object
            </b>
          )}
        </td>
        <td style={{ width: "15%" }}>{item.number}</td>
        <td style={{ width: "20%" }}>
          {new Date(item.startTime).toLocaleString()}
        </td>
        <td style={{ width: "25%" }}>
          <Starts starts={item.starts} />
        </td>
      </tr>
    </>
  );
}
