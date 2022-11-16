import React from "react";
import { Link } from "react-router-dom";

const CCViewBtns = (props) => {
  return (
    <div>
      <Link to="/community_center">
        <button
          className={`btn cc-view-btn ${
            props.ccView === "bundles" ? "cc-view-btn-active" : null
          }`}
        >
          Bundles View
        </button>
      </Link>
      <Link to="/community_center/list">
        <button
          className={`btn cc-view-btn ${
            props.ccView === "list" ? "cc-view-btn-active" : null
          }`}
        >
          List/Season View
        </button>
      </Link>
    </div>
  );
};

export default CCViewBtns;
