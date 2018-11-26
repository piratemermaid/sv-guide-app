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
            <Link to={`${globals.URL_COMMUNITY_CENTER}/spring`}>
              <li className="link-spring">Spring</li>
            </Link>
            <Link to={`${globals.URL_COMMUNITY_CENTER}/summer`}>
              <li className="link-summer">Summer</li>
            </Link>
            <Link to={`${globals.URL_COMMUNITY_CENTER}/fall`}>
              <li className="link-fall">Fall</li>
            </Link>
            <Link to={`${globals.URL_COMMUNITY_CENTER}/winter`}>
              <li className="link-winter">Winter</li>
            </Link>
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
