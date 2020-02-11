import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

const Account = props => {
  if (!props.appData) {
    return "Loading...";
  }

  const saveToLS = () => {
    localStorage.setItem("svData", JSON.stringify(props.characters));
  };

  const importFromLS = async () => {
    const characters = JSON.parse(localStorage.getItem("svData"));

    for (let i in characters) {
      const { name, upgrades, rooms, bundles, bundleItems } = characters[i];

      await props.addCharacter(name);

      for (let upgrade of upgrades) {
        const { name } = upgrade;
        await props.toggleUpgrade({ upgradeName: name, value: true });
      }

      for (let room of rooms) {
        const { name } = room;
        await props.toggleRoom({ name, value: true });
      }

      for (let bundle of bundles) {
        const { name } = bundle;
        await props.toggleBundle({ name, value: true });
      }

      for (let item of bundleItems) {
        const { key } = item;
        await props.toggleBundleItem({ key, value: true });
      }
    }

    alert("import complete");
  };

  return (
    <div>
      <Button onClick={() => saveToLS()}>Save Data to LS</Button>
      <Button onClick={() => importFromLS()}>Import Data from LS</Button>
    </div>
  );
};

export default Account;
