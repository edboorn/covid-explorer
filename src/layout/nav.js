import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Page Imports
import Home from "../pages/home/home";
import CountryBreakdown from "../pages/country-breakdown/country-breakdown-page";
import CountryData from "../pages/country-specific/country-specific";

export default function Nav() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/covid-explorer">
          COVID-19 Explorer
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <Link className="nav-item" to="/covid-explorer">
              <li className="nav-link">Home</li>
            </Link>
            <Link className="nav-item" to="/covid-explorer/countries">
              <li className="nav-link">Countries</li>
            </Link>
          </ul>
        </div>
      </nav>
      <div className="container-flex">
        <Switch>
          <Route path="/covid-explorer" exact component={Home} />
          <Route
            path="/covid-explorer/countries"
            component={CountryBreakdown}
          />
          <Route
            path="/covid-explorer/country-data/:countryCode"
            component={CountryData}
          />
        </Switch>
      </div>
      <div className="footer">
        <div className="row">
          <div className="col-sm-4">
            <a
              className="socialItemLink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/edboorn"
            >
              {" "}
              Designed and built by Edward Boorn{" "}
            </a>
          </div>
          <div className="col-sm-6"> </div>
          <div className="col-sm-2">
            <a
              className="socialItemLink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/CSSEGISandData/COVID-19"
            >
              {" "}
              Data Source{" "}
            </a>
          </div>
        </div>
      </div>
    </Router>
  );
}
