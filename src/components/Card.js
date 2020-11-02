import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.launch.links.mission_patch} alt="Avatar" />
      <div className="container">
        <h3>
          <b style={{ color: "blueviolet" }}>
            {props.launch.mission_name} #{props.launch.flight_number}
          </b>
        </h3>
        <p>
          <b>Mission ids: </b>
          {props.launch.mission_id}{" "}
        </p>
        <p>
          <b>Launch Year: </b>
         
          {  (props.launch.launch_year !== undefined && 
          props.launch.launch_year !== null)
            ? props.launch.launch_year.toString()
            : "undefined"}
        </p>
        <p>
          <b>Successful Launch: </b>
          {  (props.launch.launch_success !== undefined && 
          props.launch.launch_success !== null)
            ? props.launch.launch_success.toString()
            : "undefined"}
        
        </p>
        <p>
          <b>Successful Landing: </b>
          {(props.launch.rocket.first_stage.cores[0].land_success !== undefined && 
          props.launch.rocket.first_stage.cores[0].land_success !== null)
            ? props.launch.rocket.first_stage.cores[0].land_success.toString()
            : "undefined"}
        </p>
      </div>
    </div>
  );
}
