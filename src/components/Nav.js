import React from "react";
import { Link } from "react-router-dom";

import * as globals from "../utils/globals";

const Header = () => {
  return (
    <div>
      <ul className="sidenav yellow lighten-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={globals.URL_COMMUNITY_CENTER}>Community Center</Link>
          <ul className="subnav">
            <li className="link-spring">Spring</li>
            <li className="link-summer">Summer</li>
            <li className="link-autumn">Autumn</li>
            <li className="link-winter">Winter</li>
          </ul>
        </li>
        <li>
          <Link to={globals.URL_UPGRADES}>Upgrades</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
