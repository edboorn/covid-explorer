import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Page Imports
import Home from "../pages/home/home";
import CountryBreakdown from "../pages/country-breakdown/country-breakdown-page";
import CountryData from "../pages/country-specific/country-specific";

export default function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <Router>
      <div>
        <nav>
          <h3>COVID-19 Explorer</h3>
          <ul className="navLinks">
            <Link style={navStyle} to="/">
              <li>Home</li>
            </Link>
            <Link style={navStyle} to="/countries">
              <li>Countries</li>
            </Link>
            </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/countries" exact component={CountryBreakdown} />
          <Route path="/country-data/:countryCode" exact component={CountryData} />
        </Switch>
      </div>
    </Router>
  );
}
