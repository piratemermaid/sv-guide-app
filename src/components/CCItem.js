import React from "react";

const CCItem = props => {
  const { name, season, location, time, special } = props.info;

  function renderSeasons(seasons) {
    return seasons.map(season => {
      return <div key={season} className={`season-dot ${season}`} />;
    });
  }

  function handleCheck() {
    console.log("check!");
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={props.checked ? "checked" : ""}
          onChange={() => handleCheck()}
        />
        <span className="checkbox">{name}</span>
      </label>
      {season.constructor === Array ? renderSeasons(season) : null}
    </div>
  );
};

export default CCItem;
