/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { countryLatest } from "../../api/index";
import CountriesRender from "./countries-render";
import Spinner from "../../layout/spinner";

const countryBreakdown = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();

  const findCountry = (objList, text) => {
    if (undefined === text || text === "") return objList;
    return objList.filter((country) => {
      let flag;
      for (let prop in country) {
        flag = false;
        flag = country[prop].toString().indexOf(text) > -1;
        if (flag) break;
      }
      return flag;
    });
  };

  const searchInput = (e) => {
    setSearch(findCountry(data.updatedData, e.target.value))
    console.log(search)
  };

  useEffect(() => {
    const getData = async () => {
      setData(await countryLatest());
    };
    getData();
  }, []);

  if (data.updatedData === undefined || data === []) {
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
        <div className="row">
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
        </div>
        <p></p>
        <div className="row">
          {data.updatedData.map((item, i) => (
            <CountriesRender key={i} graphData={item} />
          ))}
        </div>
      </div>
    );
  }
};

export default countryBreakdown;
