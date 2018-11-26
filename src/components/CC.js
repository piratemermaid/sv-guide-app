import React from "react";
import { ccItems } from "../utils/ccItems";
import { ccBundles } from "../utils/ccBundles";

const CC = props => {
  return (
    <div>
      <h2>CC</h2>
      <h3>All Seasons</h3>
      <h3 className="spring">Spring</h3>
      <h3 className="summer">Summer</h3>
      <h3 className="fall">Fall</h3>
      <h3 className="winter">Winter</h3>
    </div>
  );
};

export default CC;
