/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from "react";
import GlobalGraph from "./global-graph";

export default function globals() {
  const [globalData, setGlobalData] = useState([]);
  

  useEffect(() => {
    fetchGlobalData();
  }, []);

  const fetchGlobalData = async () => {
    const response = await fetch(`https://covidapi.info/api/v1/global/timeseries/2020-03-12/2020-03-19`);
    const data = await response.json();
    setGlobalData(data.result);
  };

  console.log(globalData)
  return (
    <div className="grid">
      {Object.keys(globalData).map(function(countryCode){
       return <GlobalGraph 
        countryTitle={countryCode}
        graphData={globalData[countryCode]}/>
       //return <div>key : {countryCode}, Value:{globalData[countryCode].date} </div>
      })}
    </div>
  );
}
