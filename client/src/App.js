import _ from "lodash";
import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { LS, URLS } from "./utils/globals";
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
    this.addCharacter = this.addCharacter.bind(this);
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

  async toggleRoom({ name, value }) {
    return axios({
      method: "post",
      url: "/api/user/toggle_room",
      params: {
        characterName: this.state.selectedCharacter,
        name,
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

  async toggleBundle({ name, value }) {
    return axios({
      method: "post",
      url: "/api/user/toggle_bundle",
      params: {
        characterName: this.state.selectedCharacter,
        name,
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

  async toggleFairItem({ name, value }) {
    return axios({
      method: "post",
      url: "/api/user/toggle_fair_item",
      params: {
        characterName: this.state.selectedCharacter,
        name,
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
        localStorage.setItem("svData", JSON.stringify(res.data.characters));
        this.setState({ characters: res.data.characters });
      })
      .catch(err => {
        alert(err);
      });
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

    try {
      await axios({
        method: "get",
        url: "/api/account/authenticated"
      }).then(res => {
        const { authenticated } = res.data;
        this.authenticateUser(authenticated ? true : false);
      });
    } catch (err) {
      this.setState({ authenticated: false });
    }

    try {
      await axios({
        method: "get",
        url: "/api/app/bundles"
      }).then(res => {
        const { bundles } = res.data;
        const appData = this.state.appData;
        this.setState({ appData: { ...appData, bundles } });
      });

      await axios({
        method: "get",
        url: "/api/app/upgrades"
      }).then(res => {
        const { upgrades } = res.data;
        const appData = this.state.appData;
        this.setState({ appData: { ...appData, upgrades } });
      });

      await axios({
        method: "get",
        url: "/api/app/calendar"
      }).then(res => {
        const { calendar } = res.data;
        const appData = this.state.appData;
        this.setState({ appData: { ...appData, calendar } });
      });

      await axios({
        method: "get",
        url: "/api/app/fair_items"
      }).then(res => {
        const { fairItems } = res.data;
        const appData = this.state.appData;
        this.setState({ appData: { ...appData, fairItems } });
      });
    } catch (err) {
      this.tempAppData();
    }

    if (!this.state.selectedCharacter) {
      if (localStorage.getItem("selectedCharacter")) {
        this.setState({
          selectedCharacter: localStorage.getItem("selectedCharacter")
        });
      }
    }
  }

  // TODO: delete this if I someday deploy the database for real
  tempAppData() {
    // get app data from FE
    this.setState({
      appData: {
        bundles: bundles.bundles,
        upgrades,
        calendar: calendar.calendar,
        fairItems: calendar.fairItems
      }
    });

    // get user data from LS if exists
    const userData = JSON.parse(localStorage.getItem("svData"));
    if (userData) {
      this.setState({ authenticated: true, characters: userData });
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
