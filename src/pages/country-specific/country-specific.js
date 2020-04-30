/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import lookup from "country-code-lookup";
import {getTodaysDate} from '../../util'
import Spinner from '../../layout/spinner'
//Graph Import
import CountryGraph from "../country-specific/page-components/country-graphs";
import { countryBreakdown } from "../../api/index";

export default function country() {
  const todaysDate = getTodaysDate()
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
  }, [startDate,endDate]);

  const updateStartDate = (e) => {
    console.log(e.target.value)
    setStartDate(e.target.value);
  };
  const updateEndDate = (e) => {
    setEndDate(e.target.value)
  };

  if (countryData.result === undefined || countryData.result.length === 0) {
    return <Spinner/>
  } else {
    const formattedCountry = lookup.byIso(params.countryCode);
    return (
      <div>
        <div className="row">
          <div className="col-sm">
            <Link to="/countries" className="btn btn-dark btn-sm mb-4">
              Go Back
            </Link>
          </div>
          <div className="col-sm">
            <h3>{formattedCountry.country}</h3>
          </div>
          <div className="col-sm">
            <form>
              <div className="form-row">
                <div className="col-sm-3.5">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="StartDate"
                    onChange={updateStartDate}
                    defaultValue={startDate}
                  />
                </div>
                <div className="col-sm-3.5">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="EndDate"
                    onChange={updateEndDate}
                    defaultValue={todaysDate}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <CountryGraph graphData={countryData.result} />
      </div>
    );
  }
}
