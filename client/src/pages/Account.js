import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Loading from "../components/Loading";

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = { importing: false };
  }

  saveToLS = () => {
    localStorage.setItem("svData", JSON.stringify(this.props.characters));
  };

  importFromLS = async () => {
    this.setState({ importing: true });

    const characters = JSON.parse(localStorage.getItem("svData"));

    for (let i in characters) {
      const { name, upgrades, rooms, bundles, bundleItems } = characters[i];

      await this.props.addCharacter(name);

      for (let upgrade of upgrades) {
        const { name } = upgrade;
        await this.props.toggleUpgrade({ upgradeName: name, value: true });
      }

      for (let room of rooms) {
        const { name } = room;
        await this.props.toggleRoom({ name, value: true });
      }

      for (let bundle of bundles) {
        const { name } = bundle;
        await this.props.toggleBundle({ name, value: true });
      }

      for (let item of bundleItems) {
        const { key } = item;
        await this.props.toggleBundleItem({ key, value: true });
      }
    }

    this.setState({ importing: false });
  };

  render() {
    if (!this.props.appData) {
      return <Loading />;
    } else {
      return (
        <div>
          {!this.state.importing ? (
            <div>
              <Button onClick={this.saveToLS}>Save Data to LS</Button>
              <Button onClick={this.importFromLS}>Import Data from LS</Button>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      );
    }
  }
}

export default Account;
