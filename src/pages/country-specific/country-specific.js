/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

//Graph Import
import CountryGraph from "../country-specific/page-components/country-graphs";
import {countryBreakdown} from '../../api/index'

export default function country() {
    //TODO : Refactor into a utils page
  const getTodaysDate = (separator = "-") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  };

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
