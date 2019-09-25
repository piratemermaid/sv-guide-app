import React from "react";
import { Link } from "react-router-dom";

import { URLS } from "../utils/globals";

const Header = () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <ul className="yellow lighten-4">
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
            </div>
        </nav>
    );
};

export default Header;
