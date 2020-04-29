import React from "react";
import { Link } from "react-router-dom";
const countriesrender = (graphData) => {
  let formattedData = Object.entries(
    graphData.graphData
  ).map(([key, value]) => ({ ...value, countryCode: key }));
  console.log(formattedData);
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <p> Country Code - {formattedData[0].countryCode}</p>
          <p> Confirmed Cases - {formattedData[0].confirmed} </p>
          <p> Recovered Cases -{formattedData[0].recovered} </p>
          <p> Deaths - {formattedData[0].deaths} </p>
          <Link
            to={`/country-data/${formattedData[0].countryCode}`}
            className="btn btn-dark btn-block"
          ><i className="fas fa-chevron-right">View More</i></Link>
        </div>
      </div>
    </div>
  );
};

export default countriesrender;
