import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Page Imports
import Home from "../pages/home/home";
import CountryBreakdown from "../pages/country-breakdown/country-breakdown-page";
import CountryData from "../pages/country-specific/country-specific";

export default function Nav() {
  return (
    <Router>
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
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
            <Link className="nav-item" to="/">
              <li className="nav-link">Home</li>
            </Link>
            <Link className="nav-item" to="/countries">
              <li className="nav-link">Countries</li>
            </Link>
          </ul>
        </div>
      </nav>
      <div className="container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/countries" exact component={CountryBreakdown} />
        <Route
          path="/country-data/:countryCode"
          exact
          component={CountryData}
        />
      </Switch>
      </div>
      </>
    </Router>
  );
}
