import React from "react";
import uuid from "uuid/v4";
import ExpandedViews from "./ExpandedViews";

export default function Starts({ starts }) {
  let renderStart = starts.map((start) => {
    return (
      <div className="pt-4" key={uuid()}>
        <p>
          <b>start Number :</b> {start.number} <br />
          <b>Horse Name:</b> {start.horse.name} <br />
          <b> Driver Name:</b> {start.driver.firstName} {start.driver.lastName}
          <br />
        </p>
        <ExpandedViews start={start} />
        <div className="line1 py-1"></div>
      </div>
    );
  });
  //  creating a customize id for every single collapse menu
  let id = uuid().substring(0, 5);
  return (
    <>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="collapse"
        data-target={`#a${id}`}
      >
        Start Information
      </button>
      <div id={`a${id}`} className="collapse ">
        {renderStart}
      </div>
    </>
  );
}
