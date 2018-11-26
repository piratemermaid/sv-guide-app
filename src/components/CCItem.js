import React from "react";

const CCItem = props => {
  const { name, season, location, time, special } = props.info;

  function renderSeasons(seasons) {
    return seasons.map(season => {
      return <div key={season} className={`season-dot ${season}`} />;
    });
  }

  return (
    <div>
      <label>
        <input type="checkbox" />
        <span className="checkbox" checked="checked">
          {name}
        </span>
      </label>
      {season.constructor === Array ? renderSeasons(season) : null}
    </div>
  );
};

export default CCItem;
