/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//Graph Import
import CountryGraph from "../country-specific/page-components/country-graphs";
import { countryBreakdown } from "../../api/index";

export default function country() {
  //Top level Datastore
  const [countryData, setCountryData] = useState([]);
  let params = useParams();

  useEffect(() => {
    const fetchAPI = async () => {
      setCountryData(await countryBreakdown(params.countryCode, "2020-01-01", "2020-04-19"));
    };
    fetchAPI();
  }, []);
  if( countryData.result === undefined || countryData.result.length === 0) {
    return <h3> Page is Loading </h3>
  }
  else {
  return (
    <div>
      <Link to="/countries" className="btn btn-dark btn-sm mb-4">
        Go Back
      </Link>
      <h3>{params.countryCode}</h3>
      <CountryGraph graphData={countryData.result}/>
    </div>
  );
  }
}
