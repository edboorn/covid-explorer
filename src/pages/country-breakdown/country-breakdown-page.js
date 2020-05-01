/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { countryLatest } from "../../api/index";
import CountriesRender from "./countries-render";
import Spinner from "../../layout/spinner";

const countryBreakdown = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    const getData = async () => {
      setData(await countryLatest());
    };
    getData();
  }, []);

  const searchInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  if (data.result === undefined) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div className="row">
          <div className="col">
            <h1> Data on {data.count} countries </h1>
            <h3> Last Updated on {data.date}</h3>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={searchInput}
              ></input>
            </form>
          </div>
          <div className="col-sm-2"></div>
        </div> */}
        <p></p>
        <div className="row">
          {data.result.map((item, i) => (
            <CountriesRender key={i} graphData={item} />
          ))}
        </div>
      </div>
    );
  }
};

export default countryBreakdown;
