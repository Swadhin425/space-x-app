import React from "react";


import "./Filters.css";
import Successfull from "./Successfull";
import { Link } from "react-router-dom";

const Filters = ({ robots }) => {
  const years = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];
  return (
    <div className="filter">
      <h3>Filters</h3>
      <h5 style={{ textAlign: "center" }}>Launch Year</h5>
      <hr></hr>
      {years.map((year,index) => (
       <Link to={`/launchYear/${year}`}>
       <button key={index} >{year}</button>
       </Link> 
        // <Link to="/about" key={index}>{year}</Link>
      ))}

      <Successfull header={"Launch"} />
      <Successfull header={"Landing"} />
    </div>
  );
};

export default Filters;
