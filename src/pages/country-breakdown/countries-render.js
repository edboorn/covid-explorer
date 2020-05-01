import React from "react";
import { Link } from "react-router-dom";
import lookup from "country-code-lookup";
import { numberFormatter } from "../../util";
import Spinner from "../../layout/spinner";

const countriesrender = (graphData) => {
  const nullCheck = (countryCode) => {
    if (countryCode !== "null") {
      const formattedCountry = lookup.byIso(formattedData[0].countryCode);
      return formattedCountry;
    } else {
      console.log(countryCode)
      var NewCountryCode = { 
        country : "N/A"
      }
      return NewCountryCode;
    }
  };

  let formattedData = Object.entries(
    graphData.graphData
  ).map(([key, value]) => ({ ...value, countryCode: key }));

  let formattedConfirmed = numberFormatter(formattedData[0].confirmed);
  let formattedRecovered = numberFormatter(formattedData[0].recovered);
  let formattedDeaths = numberFormatter(formattedData[0].deaths);
  //const formattedCountry = lookup.byIso(formattedData[0].countryCode);

  const nullVarCheck = nullCheck(formattedData[0].countryCode);

  if (formattedConfirmed === null) {
    return <Spinner />;
  } else {
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h3>{formattedData[0].countryCode}</h3>
            <p> Confirmed Cases - {formattedConfirmed} </p>
            <p> Recovered Cases -{formattedRecovered} </p>
            <p> Deaths - {formattedDeaths} </p>
            <Link
              to={`/covid-explorer/country-data/${formattedData[0].countryCode}`}
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
