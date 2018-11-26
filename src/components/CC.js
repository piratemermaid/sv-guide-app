import React from "react";
import { withRouter } from "react-router-dom";

import CCItem from "./CCItem";
import { toTitleCase } from "../utils/utils";
import { ccItems } from "../utils/ccItems";
import { ccBundles } from "../utils/ccBundles";

const CC = props => {
  function renderItems(season) {
    const { params } = props.match;
    if (Object.keys(params).length === 0 || params.season === season) {
      let i = -1;
      return (
        <div>
          <h3 className={season}>{toTitleCase(season)}</h3>
          {ccItems.map(item => {
            if (item.season === season || item.season.includes(season)) {
              i++;
              return <CCItem key={i} info={item} />;
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
      <h3>All Seasons</h3>
      {renderItems("spring")}
      {renderItems("summer")}
      {renderItems("fall")}
      {renderItems("winter")}
    </div>
  );
};

export default withRouter(CC);
