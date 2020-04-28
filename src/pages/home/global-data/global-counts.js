/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from "react";
//import GlobalGraph from "./global-graph";

import {globalBreakdown} from '../../../api/index'
export default function globals() {
  const [globalData, setGlobalData] = useState([]);
  

  useEffect(() => {
    const fetchAPI = async () => {
      setGlobalData(await globalBreakdown("2020-03-12", "2020-03-19"));
    };
    fetchAPI();
  }, []);


  return (
    <div className="grid">
      {/* {Object.keys(globalData).map(function(countryCode){
       return <GlobalGraph 
        countryTitle={countryCode}
        graphData={globalData[countryCode]}/>
       //return <div>key : {countryCode}, Value:{globalData[countryCode].date} </div>
      })} */}
      <p> Data Graphs - Check the console for more info</p>
    </div>
  );
}
