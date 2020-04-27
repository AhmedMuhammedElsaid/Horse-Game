import React from "react";
import uuid from "uuid/v4";

export default function ExpandedViews({ start }) {
  return (
    <div key={uuid()} style={{ marginTop: "-18px" }}>
      <div  key={uuid()} className="dropdown">
        <p className="dropbtn my-0 py-0">
          <b>Trainer Full Name</b>
        </p>
        <div className="dropdown-content">
          <span>
            Name: {start.horse.trainer.firstName} {start.horse.trainer.lastName}
          </span>
        </div>
      </div>
      <div key={uuid()} className="dropdown">
        <p className="dropbtn my-0 py-0">
          <b>Horse Father's Name</b>
        </p>
        <div className="dropdown-content">
          <span>Father: {start.horse.pedigree.father.name}</span>
        </div>
      </div>
    </div>
  );
}
