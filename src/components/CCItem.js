import React from "react";

const CCItem = props => {
  const { name, season, location, time, special } = props.info;

  function renderSeasons(seasons) {
    return seasons.map(season => {
      return <div key={season} className={`season-dot ${season}`} />;
    });
  }

  function handleCheck(id) {
    console.log(id);
    props.toggleCCItem(id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={props.checked ? "checked" : ""}
          onChange={() => handleCheck(props.id)}
        />
        <span className="checkbox">{name}</span>
      </label>
      {season.constructor === Array ? renderSeasons(season) : null}
    </div>
  );
};

export default CCItem;
