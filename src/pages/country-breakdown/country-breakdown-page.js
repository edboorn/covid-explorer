/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { countryLatest } from "../../api/index";
import CountriesRender from "./countries-render";

const countryBreakdown = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setData(await countryLatest());
    };
    getData();
  }, []);

  if (data.result === undefined) {
    return <h3> Data Loading </h3>;
  } else {
    return (
      <div>
        <h1> Data on {data.count} countries </h1>
        <h3> Last Updated on {data.date}</h3>
        <div className="container">
          <div className="row">
        {data.result.map((item,i) => (  
          <CountriesRender key={i} graphData={item}/>
        ))}
        </div>
        </div>
      </div>
    );
  }
};

export default countryBreakdown;
