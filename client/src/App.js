import _ from "lodash";
import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { LS, URLS, DEFAULT_STATE } from "./utils/globals";
import { upgradeItems } from "./utils/upgrades";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CCBundles from "./pages/CCBundles";
import CCList from "./pages/CCList";
import Upgrades from "./pages/Upgrades";
import Calendar from "./pages/Calendar";

import purple from "@material-ui/core/colors/purple";
import teal from "@material-ui/core/colors/teal";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: teal
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedCharacter: null, characters: [] };

    this.toggleItem = this.toggleItem.bind(this);
    this.reset = this.reset.bind(this);
    this.setToolPickup = this.setToolPickup.bind(this);
    this.changeSeasonFilter = this.changeSeasonFilter.bind(this);

    this.authenticateUser = this.authenticateUser.bind(this);
    this.selectCharacter = this.selectCharacter.bind(this);
    this.addCharacter = this.addCharacter.bind(this);
    this.toggleUpgrade = this.toggleUpgrade.bind(this);
    this.toggleBundleItem = this.toggleBundleItem.bind(this);
  }

  /**
   * @param {num} id
   * @param {string} type 'upgrades' or 'cc'
   * 1 = checked, 0 = unchecked
   */
  toggleItem(id, type) {
    let newArr = this.state[type];
    this.state[type][id] === 0 ? (newArr[id] = 1) : (newArr[id] = 0);

    let newState = this.state;
    newState[type] = newArr;
    this.setState(newState);
    localStorage.setItem(LS, JSON.stringify(newState));

    // For upgrades, if a prereq is unchecked,
    // uncheck everything that relies on it
    if (type === "upgrades" && newArr[id] === 0) {
      for (let item in upgradeItems) {
        if (
          upgradeItems[item].prereq === upgradeItems[id].name &&
          this.state.upgrades[item] === 1
        ) {
          // If an item has the clicked item as a prereq,
          // also toggle this item
          this.toggleItem(item, "upgrades");
        }
      }
    }
  }

  reset(type) {
    let newArr = this.state[type];
    for (let i in newArr) {
      newArr[i] = 0;
    }

    let newState = this.state;
    newState[type] = newArr;
    if (type === "upgrades") {
      newState.toolPickup = false;
    }
    this.setState(newState);
    localStorage.setItem(LS, JSON.stringify(newState));
  }

  setToolPickup(day) {
    let newState = this.state;
    if (day === this.state.toolPickup) {
      newState.toolPickup = false;
    } else {
      newState.toolPickup = day;
    }
    this.setState(newState);
    localStorage.setItem(LS, JSON.stringify(newState));
  }

  changeSeasonFilter(season) {
    let newState = this.state;
    if (season === this.state.seasonFilter) {
      newState.seasonFilter = false;
    } else {
      newState.seasonFilter = season;
    }
    this.setState(newState);
    localStorage.setItem(LS, JSON.stringify(newState));
  }

  authenticateUser(authenticated) {
    this.setState({ authenticated });
    if (authenticated) {
      this.fetchUserData();
    }
  }

  selectCharacter = name => {
    localStorage.setItem("selectedCharacter", name);
    this.setState({ selectedCharacter: name });
  };

  async addCharacter(name) {
    return axios({
      method: "post",
      url: "/api/user/add_character",
      params: { name }
    }).then(res => {
      if (res.data === "success") {
        this.fetchUserData();
      } else {
        if (res.data.error) {
          alert(res.data.error);
        }
      }
    });
  }

  async toggleUpgrade({ upgradeName, value }) {
    return axios({
      method: "post",
      url: "/api/user/toggle_upgrade",
      params: {
        characterName: this.state.selectedCharacter,
        upgradeName,
        value
      }
    }).then(res => {
      if (res.data === "success") {
        this.fetchUserData();
      } else {
        if (res.data.error) {
          alert(res.data.error);
        }
      }
    });
  }

  async toggleBundleItem({ key, value }) {
    return axios({
      method: "post",
      url: "/api/user/toggle_bundle_item",
      params: {
        characterName: this.state.selectedCharacter,
        key,
        value
      }
    }).then(res => {
      if (res.data === "success") {
        this.fetchUserData();
      } else {
        if (res.data.error) {
          alert(res.data.error);
        }
      }
    });
  }

  async fetchUserData() {
    // console.log("> FETCH USER DATA");
    return axios({
      method: "get",
      url: "/api/user/data"
    })
      .then(res => {
        this.setState({ characters: res.data.characters });
      })
      .catch(err => {
        alert(err);
      });
  }

  componentWillMount() {
    // get data from LS
    const selectedCharacter = localStorage.getItem("selectedCharacter");
    if (selectedCharacter) {
      this.setState({ selectedCharacter });
    }

    if (Object.keys(this.state).length === 0) {
      if (localStorage.getItem(LS)) {
        this.setState(JSON.parse(localStorage.getItem(LS)));
      } else {
        localStorage.setItem(LS, JSON.stringify(DEFAULT_STATE));
        this.setState(DEFAULT_STATE);
      }
    }
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "/api/account/authenticated"
    }).then(res => {
      const { authenticated } = res.data;
      this.authenticateUser(authenticated ? true : false);
    });

    axios({
      method: "get",
      url: "/api/app/bundles"
    }).then(res => {
      const { bundles } = res.data;
      const appData = this.state.appData;
      this.setState({ appData: { ...appData, bundles } });
    });

    axios({
      method: "get",
      url: "/api/app/upgrades"
    }).then(res => {
      const { upgrades } = res.data;
      const appData = this.state.appData;
      this.setState({ appData: { ...appData, upgrades } });
    });
  }

  render() {
    const {
      cc,
      //   upgrades,
      toolPickup,
      seasonFilter,
      authenticated,
      selectedCharacter,
      characters,
      appData
    } = this.state;

    if (!appData || !appData.bundles || !appData.upgrades || !characters) {
      return (
        <div className="App">
          <MuiThemeProvider theme={theme}>
            <BrowserRouter>
              <div>
                <Nav />
                <main>Loading...</main>
              </div>
            </BrowserRouter>
          </MuiThemeProvider>
        </div>
      );
    } else {
      const { upgrades, bundles } = appData;
      const userData = _.find(characters, { name: selectedCharacter });

      return (
        <div className="App">
          <MuiThemeProvider theme={theme}>
            <BrowserRouter>
              <div>
                <Nav />
                <main>
                  <Switch>
                    <Route
                      exact
                      path={URLS["Characters"]}
                      render={() => (
                        <Home
                          authenticated={authenticated}
                          selectedCharacter={selectedCharacter}
                          characters={characters}
                          authenticateUser={this.authenticateUser}
                          selectCharacter={this.selectCharacter}
                          addCharacter={this.addCharacter}
                        />
                      )}
                    />
                    <Route
                      path="/login"
                      render={() => (
                        <Login authenticateUser={this.authenticateUser} />
                      )}
                    />
                    }
                    <Route
                      path="/signup"
                      render={() => (
                        <Signup authenticateUser={this.authenticateUser} />
                      )}
                    />
                    }
                    <Route
                      exact
                      path={URLS["Community Center"]}
                      render={() => (
                        <CCBundles
                          bundles={bundles}
                          userData={userData}
                          toggleBundleItem={this.toggleBundleItem}
                          cc={cc}
                          toggleItem={this.toggleItem}
                          reset={this.reset}
                          seasonFilter={seasonFilter}
                          changeSeasonFilter={this.changeSeasonFilter}
                        />
                      )}
                    />
                    <Route
                      path={`${URLS["Community Center"]}/list`}
                      render={() => (
                        <CCList
                          cc={cc}
                          toggleItem={this.toggleItem}
                          reset={this.reset}
                          seasonFilter={seasonFilter}
                          changeSeasonFilter={this.changeSeasonFilter}
                        />
                      )}
                    />
                    <Route
                      path={URLS["Upgrades"]}
                      render={() => (
                        <Upgrades
                          upgrades={upgrades}
                          userData={userData}
                          toolPickup={toolPickup}
                          toggleUpgrade={this.toggleUpgrade}
                          reset={this.reset}
                          setToolPickup={this.setToolPickup}
                        />
                      )}
                    />
                    <Route
                      path={URLS["Calendar"]}
                      render={() => (
                        <Calendar
                          seasonFilter={seasonFilter}
                          changeSeasonFilter={this.changeSeasonFilter}
                        />
                      )}
                    />
                  </Switch>
                </main>
              </div>
            </BrowserRouter>
          </MuiThemeProvider>
        </div>
      );
    }
  }
}

export default App;
