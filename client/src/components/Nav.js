import React from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

import { URLS } from "../utils/globals";

class Header extends React.Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".sidenav");
    var options = { closeOnClick: true };
    var instances = M.Sidenav.init(elems, options);
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav sidenav-fixed">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={URLS.UPGRADES}>Upgrades</Link>
          </li>
          <li>
            <Link to={URLS.COMMUNITY_CENTER}>Community Center</Link>
          </li>
          <li>
            <Link to={URLS.CALENDAR}>Calendar</Link>
          </li>
        </ul>
        <a data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}

export default Header;
