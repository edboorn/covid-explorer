import React from "react";
import { Link } from "react-router-dom";
import lookup from 'country-code-lookup';

const countriesrender = (graphData) => {
  let formattedData = Object.entries(
    graphData.graphData
  ).map(([key, value]) => ({ ...value, countryCode: key }));
  const formattedCountry = lookup.byIso(formattedData[0].countryCode);
  if(formattedCountry === null){
    return <h3> Data is Loading </h3>
  } 
  else {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h3>{formattedCountry.country}</h3>
          <p> Confirmed Cases - {formattedData[0].confirmed} </p>
          <p> Recovered Cases -{formattedData[0].recovered} </p>
          <p> Deaths - {formattedData[0].deaths} </p>
          <Link
            to={`/country-data/${formattedData[0].countryCode}`}
            className="btn btn-dark btn-block"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
  }
};

export default countriesrender;
