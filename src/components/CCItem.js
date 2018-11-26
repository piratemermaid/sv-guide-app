import React from "react";

const CCItem = props => {
  const { name, season, location, time, special } = props.info;

  function renderSeasons(seasons) {
    return seasons.map(season => {
      return <div className={`season-dot ${season}`} />;
    });
  }

  return (
    <div>
      {name}
      {season.constructor === Array ? renderSeasons(season) : null}
    </div>
  );
};

export default CCItem;
