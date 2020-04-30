/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import {numberFormatter} from '../../../util'
import { fetchGlobalStats } from "../../../api/index";
import Spinner from "../../../layout/spinner";

const StatsData = ({ handleStatsChange }) => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setStats(await fetchGlobalStats());
    };
    fetchAPI();
  }, []);
  if (stats.result === undefined) {
    return <p></p> // Not convinced this does a lot, other than to slow the execution long enough for the data to load
  } else {
    let formattedConfirmed = numberFormatter(stats.result.confirmed)
    let formattedRecovered = numberFormatter(stats.result.recovered)
    let formattedDeaths = numberFormatter(stats.result.deaths)
    return (
      <div>
        <h3> How is the world doing on {stats.date} </h3>
        <p>
          There are currently {formattedConfirmed} confirmed cases, {formattedRecovered} recoveries and {formattedDeaths} deaths
        </p>
      </div>
    );
  }
};

export default StatsData;
