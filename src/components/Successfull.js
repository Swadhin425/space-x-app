import React from "react";
import "./Successfull.css";

function Successfull(props) {
  return (
    <div className="row">
      <h4 >Successful {props.header}</h4>
      
      <div className="column">
        <button>true</button>
      </div>
      <div className="column">
        <button>false</button>
      </div>
    </div>
  );
}

export default Successfull;
