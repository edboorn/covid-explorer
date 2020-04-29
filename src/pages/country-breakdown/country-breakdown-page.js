/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { countryLatest } from "../../api/index";

const countryBreakdown = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setData(await countryLatest());
    };
    getData();
  });

  //console.log(data)
  return (
    <div>
      <h1> Data on {data.count} countries </h1>
      <h3> Last Updated on {data.date}</h3>
    </div>
  );
};

export default countryBreakdown;
