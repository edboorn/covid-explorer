/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

//Graph Import
import CountryGraph from "../country-specific/page-components/country-graphs";
import {countryBreakdown} from '../../api/index'

export default function country() {

  //Top level Datastore
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountryData(await countryBreakdown("GBR","2020-01-01","2020-04-19"));
    }
    fetchAPI();
  }, []);

  console.log(countryData)
  return (
    <div>
      <h1> Country Graph Component </h1>
    </div>
  );
}
