/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

//Graph Import
import CountryGraph from "../country-specific/page-components/country-graphs";

export default function country() {
    //Refactor into a utils page
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

  // Date Format is YYYY/MM/DD
  const [startDate, setStartDate] = useState("2020-01-01");
  const [endDate, setEndDate] = useState(getTodaysDate());
  const [country, setCountry] = useState("GBR"); // ISO Query on country

  //Query Fields
  const [countryQuery, setCountryQuery] = useState("GBR");
  const [startDateQuery, setStartDateQuery] = useState("2020-01-01");
  const [EndDateQuery, setEndDateQuery] = useState("2020-04-19");



  useEffect(() => {
    fetchCountryData();
  }, [countryQuery || startDateQuery || EndDateQuery]);

  const fetchCountryData = async () => {
    const response = await fetch(
      `https://covidapi.info/api/v1/country/${country}/timeseries/${startDateQuery}/${EndDateQuery}`
    );
    const data = await response.json();
    setCountryData(data.result);
  };

  const updateSearchTerms = (e) => {
    setCountry(e.target.value);
  };

  const updateStartDate = (e) => {
    console.log("start Date", e.target.value);
    setStartDate(e.target.value);
  };

  const updateEndDate = (e) => {
    console.log("end date", e.target.value);
    setEndDate(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setCountryQuery(country);
    setStartDateQuery(startDate);
    setEndDateQuery(endDate);
  };

  return (
    <div>
      <div className="searchForm">
        <form
          id="country-search-form"
          className="country-search-form"
          onSubmit={getSearch}
        >
          <label>Choose a Country</label>
          <select className="search-dropdown" onChange={updateSearchTerms}>
            <option value="GBR">United Kingdom</option>
            <option value="USA">US</option>
            <option value="DEU">Germany</option>
            <option value="FRA">France</option>
            <option value="CHN">China</option>
          </select>
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={updateStartDate}
          ></input>
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={endDate}
            max={endDate}
            onChange={updateEndDate}
          ></input>
          <button className="searchButton" type="submit">
            Update
          </button>
        </form>
        <form></form>
      </div>
      <CountryGraph graphData={countryData} countryTitle={country} />
    </div>
  );
}
