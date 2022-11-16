import React from "react";

import { seasonColors } from "../utils/utils";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const SeasonCircle = (props) => {
  const { season } = props;

  return <FiberManualRecordIcon style={{ color: seasonColors[season] }} />;
};

export default SeasonCircle;
