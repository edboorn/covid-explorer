import React from "react";
import { Link } from "react-router-dom";
import { numberFormatter } from "../../util";
import Spinner from "../../layout/spinner";

const countriesrender = (graphData) => {
  const formattedConfirmed = numberFormatter(graphData.graphData.data.confirmed)
  const formattedRecoveries = numberFormatter(graphData.graphData.data.recovered)
  const formattedDeaths = numberFormatter(graphData.graphData.data.deaths)
  if (graphData === null) {
    return <Spinner />;
  } else {
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h3>{graphData.graphData.name}</h3>
            <p> Confirmed Cases - {formattedConfirmed} </p>
            <p> Recovered Cases - {formattedRecoveries} </p>
            <p> Deaths - {formattedDeaths}</p>
            <Link
              to={`/covid-explorer/country-data/${graphData.graphData.code}`}
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
