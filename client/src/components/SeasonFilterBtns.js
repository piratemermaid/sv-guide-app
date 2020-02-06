import React from "react";

const SeasonFilterBtns = props => {
  function renderBtn(season) {
    let btnClass = `btn ${season} season-filter`;
    if (season === props.seasonFilter) {
      btnClass += " season-filter-active";
    }
    return (
      <button
        className={btnClass}
        onClick={() => props.changeSeasonFilter(season)}
      >
        {season}
      </button>
    );
  }

  return (
    <div className="row">
      {renderBtn("Spring")}
      {renderBtn("Summer")}
      {renderBtn("Fall")}
      {renderBtn("Winter")}
    </div>
  );
};

export default SeasonFilterBtns;
