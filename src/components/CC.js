import React from "react";
import { withRouter } from "react-router-dom";

import CCItem from "./CCItem";
import { getItemID, toTitleCase } from "../utils/utils";
import { ccItems } from "../utils/ccItems";
// import { ccBundles } from "../utils/ccBundles";

const CC = props => {
  function renderItems(season) {
    const { params } = props.match;
    if (
      Object.keys(params).length === 0 ||
      params.season === season ||
      season === "all"
    ) {
      let i = -1;
      return (
        <div>
          <h3 className={season}>
            {season === "all" ? "All Seasons" : toTitleCase(season)}
          </h3>
          {ccItems.map(item => {
            if (item.season === season || item.season.includes(season)) {
              const id = getItemID(item.name, "cc");
              i++;
              return (
                <CCItem
                  key={i}
                  info={item}
                  checked={props.cc[id] === 1}
                  toggleItem={props.toggleItem}
                  id={id}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      <h2>CC</h2>
      <div className="row">
        <div className="col s6">{renderItems("all")}</div>
        <div className="col s6">
          {renderItems("spring")}
          {renderItems("summer")}
          {renderItems("fall")}
          {renderItems("winter")}
        </div>
      </div>
    </div>
  );
};

export default withRouter(CC);
