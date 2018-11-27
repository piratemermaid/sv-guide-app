import React from "react";

const UpgradeItem = props => {
  const { name } = props.info;

  function handleCheck(id) {
    props.toggleItem(id, "upgrades");
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={props.checked ? "checked" : ""}
          onChange={() => handleCheck(props.id, name)}
        />
        <span style={{ fontSize: "13px" }}>{name}</span>
      </label>
    </div>
  );
};

export default UpgradeItem;
