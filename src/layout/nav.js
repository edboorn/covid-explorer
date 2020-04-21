import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Page Imports
import Home from "../pages/home/home";
import About from "../pages/about/about";
import ContryData from "../pages/country-specific/country-specific";

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
            <Link style={navStyle} to="/country-data">
              <li>Country Data</li>
            </Link>
            <Link style={navStyle} to="/About">
              <li>About this App</li>
            </Link>
            </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/country-data" exact component={ContryData} />
          <Route path="/About" exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}
