/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";


import GlobalStats from './statscomponent'

export default function statsdata() {
  const [date, setDate] = useState("");
  const [confirmed, setConfirmed] = useState(0)
  const [recovered, setRecovered] = useState(0)
  const [deaths, setDeaths] = useState(0)

  useEffect(() => {
    fetchGlobalData();
  }, []);

  const fetchGlobalData = async () => {
    const response = await fetch(`https://covidapi.info/api/v1/global`);
    const data = await response.json();
    setDate(data.date);
    setConfirmed(data.result.confirmed)
    setRecovered(data.result.recovered)
    setDeaths(data.result.deaths)
  };

  return (
      <div>
          <GlobalStats 
          date={date}
          confirmed={confirmed}
          recovered={recovered}
          deaths={deaths}
          />
      </div>
  )
}

