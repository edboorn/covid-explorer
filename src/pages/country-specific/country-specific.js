/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import lookup from "country-code-lookup";
import { getTodaysDate } from "../../util";
import Spinner from "../../layout/spinner";
//Graph Import
import CountryGraph from "../country-specific/page-components/country-graphs";
import { countryBreakdown } from "../../api/index";

export default function country() {
  const todaysDate = getTodaysDate();
  //Top level Datastore
  const [countryData, setCountryData] = useState([]);
  const [startDate, setStartDate] = useState("2020-01-01");
  const [endDate, setEndDate] = useState(todaysDate);

  let params = useParams();

  useEffect(() => {
    const fetchAPI = async () => {
      setCountryData(
        await countryBreakdown(params.countryCode, startDate, endDate)
      );
    };
    fetchAPI();
  }, [startDate, endDate]);

  const updateStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const updateEndDate = (e) => {
    setEndDate(e.target.value);
  };
  const resetData = () => {
    setStartDate("2020-01-01")
    setEndDate(todaysDate)
  }

  if (countryData.isError) {
    return (
      <div>
        <h1>Ooops!</h1>
        <h3>There has been an error</h3>
        <h4>
          {" "}
          This may be because you selected dates that are not currently returned
          by the api
        </h4>
        <Link
          to="/covid-explorer/countries"
          className="btn btn-dark btn-sm mb-4"
        >
          Click me to go back!
        </Link>
      </div>
    );
  }
  if (countryData.result === undefined || countryData.result.length === 0) {
    return <Spinner />;
  } else {
    const formattedCountry = lookup.byIso(params.countryCode);
    return (
      <div>
        <div className="row">
          <div className="col-sm-2">
            <Link
              to="/covid-explorer/countries"
              className="btn btn-dark btn-sm mb-4"
            >
              Go Back
            </Link>
          </div>
          <div className="col-sm-2">
            <h3>{formattedCountry.country}</h3>
          </div>
          <div className="col-sm-6">
            <form>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> Start and End Date </span>
                </div>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="StartDate"
                    onChange={updateStartDate}
                    defaultValue={startDate}
                    min="2020-01-01"
                    max={todaysDate}
                  />
                  <input
                    type="date"
                    className="form-control"
                    placeholder="EndDate"
                    onChange={updateEndDate}
                    defaultValue={todaysDate}
                    min="2020-01-01"
                    max={todaysDate}
                  />
              </div>
            </form>
          </div>
          <div className="col-sm-1">
          <button type="button" className="btn btn-dark" onClick={resetData}>Reset</button>
          </div>
        </div>

        <CountryGraph graphData={countryData.result} />
      </div>
    );
  }
}
