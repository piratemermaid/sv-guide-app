import React from "react";
import { Link } from "react-router-dom";

import { URLS } from "../utils/globals";

const Header = () => {
  return (
    <div>
      <ul className="sidenav yellow lighten-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={URLS.COMMUNITY_CENTER}>Community Center</Link>
        </li>
        <li>
          <Link to={URLS.UPGRADES}>Upgrades</Link>
        </li>
        <li>
          <Link to={URLS.CALENDAR}>Calendar</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
