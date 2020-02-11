import React from "react";

import { seasonColors } from "../utils/utils";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const SeasonCircle = props => {
  const { season } = props;

  return <FiberManualRecordIcon style={{ color: seasonColors[season] }} />;
};

export default SeasonCircle;
