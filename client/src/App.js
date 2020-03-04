import _ from "lodash";
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { LS, URLS } from "./utils/globals";
import userData from "./demoData";
import bundles from "./data/bundles";
import upgrades from "./data/upgrades";
import calendar from "./data/calendar";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import CCBundles from "./pages/CCBundles";
import Upgrades from "./pages/Upgrades";
import Calendar from "./pages/Calendar";
import Account from "./pages/Account";
import Loading from "./components/Loading";

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

    this.state = {
      selectedCharacter: null,
      characters: [],
      CCSeasonFilters: {
        spring: false,
        summer: false,
        fall: false,
        winter: false
      },
      calendarSeasonFilter: null
    };

    this.setToolPickup = this.setToolPickup.bind(this);
    this.changeCCSeasonFilters = this.changeCCSeasonFilters.bind(this);
    this.changeCalendarSeasonFilter = this.changeCalendarSeasonFilter.bind(
      this
    );

    this.authenticateUser = this.authenticateUser.bind(this);
    this.selectCharacter = this.selectCharacter.bind(this);
    this.toggleUpgrade = this.toggleUpgrade.bind(this);
    this.toggleRoom = this.toggleRoom.bind(this);
    this.toggleBundle = this.toggleBundle.bind(this);
    this.toggleBundleItem = this.toggleBundleItem.bind(this);
    this.toggleFairItem = this.toggleFairItem.bind(this);
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

  changeCCSeasonFilters(season) {
    let { CCSeasonFilters } = this.state;
    CCSeasonFilters[season] = !CCSeasonFilters[season];
    this.setState({ CCSeasonFilters });

    let data = JSON.parse(localStorage.getItem(LS));
    localStorage.setItem(LS, JSON.stringify({ ...data, CCSeasonFilters }));
  }

  changeCalendarSeasonFilter(season) {
    let { calendarSeasonFilter } = this.state;
    let newCalendarSeasonFilter = season;
    if (calendarSeasonFilter === season) {
      newCalendarSeasonFilter = null;
    }

    this.setState({ calendarSeasonFilter: newCalendarSeasonFilter });
    let data = JSON.parse(localStorage.getItem(LS));
    localStorage.setItem(
      LS,
      JSON.stringify({ ...data, calendarSeasonFilter: newCalendarSeasonFilter })
    );
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

  updateData({ type, name, value }) {
    let { characters } = this.state;

    if (type !== "bundleItems") {
      if (value) {
        characters[0][type].push({ name });
      } else {
        const index = _.findIndex(characters[0][type], { name });
        characters[0][type].splice(index, 1);
      }
    } else {
      if (value) {
        characters[0][type].push({ key: name });
      } else {
        const index = _.findIndex(characters[0][type], { key: name });
        characters[0][type].splice(index, 1);
      }
    }

    this.setState({ characters });
    localStorage.setItem(LS, JSON.stringify(characters[0]));
  }

  async toggleUpgrade({ upgradeName, value }) {
    this.updateData({ type: "upgrades", name: upgradeName, value });
  }

  async toggleRoom({ name, value }) {
    this.updateData({ type: "rooms", name, value });
  }

  async toggleBundle({ name, value }) {
    this.updateData({ type: "bundles", name, value });
  }

  async toggleBundleItem({ key, value }) {
    this.updateData({ type: "bundleItems", name: key, value });
  }

  async toggleFairItem({ name, value }) {
    this.updateData({ type: "fairItems", name, value });
  }

  async componentDidMount() {
    const data = JSON.parse(localStorage.getItem(LS));
    if (data) {
      if (data.CCSeasonFilters) {
        this.setState({ CCSeasonFilters: data.CCSeasonFilters });
      }
      if (data.calendarSeasonFilter) {
        this.setState({ calendarSeasonFilter: data.calendarSeasonFilter });
      }
    }

    this.getDemoData();
  }

  getDemoData() {
    // get app data from FE
    this.setState({
      appData: {
        bundles: bundles.bundles,
        upgrades,
        calendar: calendar.calendar,
        fairItems: calendar.fairItems
      }
    });

    // get demo user data
    this.setState({
      authenticated: true,
      characters: [userData],
      selectedCharacter: "Star Dew"
    });

    // or use LS if it exists
    if (localStorage.getItem(LS)) {
      this.setState({ characters: [JSON.parse(localStorage.getItem(LS))] });
    } else {
      localStorage.setItem(LS, JSON.stringify(userData));
    }
  }

  render() {
    const {
      toolPickup,
      calendarSeasonFilter,
      CCSeasonFilters,
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
                <main>
                  <Loading />
                </main>
              </div>
            </BrowserRouter>
          </MuiThemeProvider>
        </div>
      );
    } else {
      const { upgrades, bundles, calendar, fairItems } = appData;
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
                          authenticated={authenticated}
                          bundles={bundles}
                          userData={userData}
                          toggleRoom={this.toggleRoom}
                          toggleBundle={this.toggleBundle}
                          toggleBundleItem={this.toggleBundleItem}
                          seasonFilters={CCSeasonFilters}
                          changeCCSeasonFilters={this.changeCCSeasonFilters}
                        />
                      )}
                    />
                    {/* <Route
                      path={`${URLS["Community Center"]}/list`}
                      render={() => (
                        <CCList
                          seasonFilters={CCSeasonFilters}
                          changeCCSeasonFilters={this.changeCCSeasonFilters}
                        />
                      )}
                    /> */}
                    <Route
                      path={URLS["Upgrades"]}
                      render={() => (
                        <Upgrades
                          authenticated={authenticated}
                          upgrades={upgrades}
                          userData={userData}
                          toolPickup={toolPickup}
                          toggleUpgrade={this.toggleUpgrade}
                          setToolPickup={this.setToolPickup}
                        />
                      )}
                    />
                    <Route
                      path={URLS["Calendar"]}
                      render={() => (
                        <Calendar
                          calendarSeasonFilter={calendarSeasonFilter}
                          changeCalendarSeasonFilter={
                            this.changeCalendarSeasonFilter
                          }
                          authenticated={authenticated}
                          userData={userData}
                          calendar={calendar}
                          fairItems={fairItems}
                          toggleFairItem={this.toggleFairItem}
                        />
                      )}
                    />
                    <Route
                      path={URLS["My Account"]}
                      render={() => (
                        <Account
                          authenticated={authenticated}
                          appData={appData}
                          characters={characters}
                          addCharacter={this.addCharacter}
                          toggleUpgrade={this.toggleUpgrade}
                          toggleRoom={this.toggleRoom}
                          toggleBundle={this.toggleBundle}
                          toggleBundleItem={this.toggleBundleItem}
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
