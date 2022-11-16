import _ from "lodash";
import React from "react";
import {
  Checkbox,
  FormControlLabel,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon
} from "@mui/material";
import {
  Inbox as InboxIcon,
  Build as BuildIcon,
  Pets as PetsIcon,
  Home as HomeIcon,
  Business as BusinessIcon,
  Nature as NatureIcon
} from "@mui/icons-material";

import Loading from "../components/Loading";
import Landing from "./Landing";
import CharacterSelect from "./CharacterSelect";
import { useAppUpgrades } from "../hooks/appData/useAppUpgrades";

const drawerWidth = 50;

const styles = {
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    margin: "50px 0 0 0"
  }
};

const Upgrades = (props) => {
  const { data: appUpgrades, isFetching: isAppUpgradesFetching } =
    useAppUpgrades();

  if (!props.authenticated) {
    return <Landing />;
  } else if (isAppUpgradesFetching) {
    return <Loading />;
  } else if (!props.userData) {
    return <CharacterSelect />;
  }

  const userUpgrades = props.userData.upgrades;

  const upgradesByType = _.groupBy(appUpgrades, "type");

  const handleChange = (e, name) => {
    props.toggleUpgrade({ upgradeName: name, value: e.target.checked });
  };

  const getIcon = (text) => {
    switch (text) {
      case "tool":
        return <BuildIcon />;
      case "building":
        return <BusinessIcon />;
      case "animal":
        return <PetsIcon />;
      case "tree":
        return <NatureIcon />;
      case "home":
        return <HomeIcon />;
      default:
        return <InboxIcon />;
    }
  };

  return (
    <div>
      <Drawer
        sx={styles.drawer}
        variant="permanent"
        classes={{
          paper: styles.drawerPaper
        }}
        anchor="right"
      >
        <div sx={styles.toolbar} />
        <Divider />
        <List>
          {["tool", "building", "animal", "tree", "home"].map((text, index) => (
            <ListItem button key={text} href={`#${text}`} component="a">
              <ListItemIcon>{getIcon(text)}</ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {_.map(upgradesByType, (typeUpgrades) => {
        const type = typeUpgrades[0].type;
        return (
          <div key={type} id={type}>
            <div>
              <h3>
                {type}
                {type !== "home" ? "s" : null}
              </h3>
              <ul>
                {typeUpgrades.map(({ name, cost, prereq }) => {
                  const checked = _.find(userUpgrades, { name }) ? true : false;

                  // checkbox is disabled if user does not have prereq
                  // e.g. can't get Gold Pickaxe without Steel Pickaxe
                  let prereqStatus = true;
                  if (prereq) {
                    if (!_.find(userUpgrades, { name: prereq })) {
                      prereqStatus = false;
                    }
                  }

                  // format cost
                  const costStringArr = cost.map(({ name, amount }) => {
                    return `${amount} ${name}`;
                  });
                  const costString = costStringArr.join(", ");

                  return (
                    <li key={name}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked && prereqStatus}
                            onChange={(e) => handleChange(e, name)}
                            value={name}
                            color="secondary"
                            disabled={!prereqStatus}
                          />
                        }
                        label={`${name} (${costString})`}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Upgrades;
