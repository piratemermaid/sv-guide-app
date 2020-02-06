import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as globals from "./utils/globals";
import { upgradeItems } from "./utils/upgrades";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CCBundles from "./pages/CCBundles";
import CCList from "./pages/CCList";
import Upgrades from "./pages/Upgrades";
import Calendar from "./pages/Calendar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.toggleItem = this.toggleItem.bind(this);
    this.reset = this.reset.bind(this);
    this.setToolPickup = this.setToolPickup.bind(this);
    this.changeSeasonFilter = this.changeSeasonFilter.bind(this);
    this.authenticateUser = this.authenticateUser.bind(this);
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
    localStorage.setItem(globals.LS, JSON.stringify(newState));

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
    localStorage.setItem(globals.LS, JSON.stringify(newState));
  }

  setToolPickup(day) {
    let newState = this.state;
    if (day === this.state.toolPickup) {
      newState.toolPickup = false;
    } else {
      newState.toolPickup = day;
    }
    this.setState(newState);
    localStorage.setItem(globals.LS, JSON.stringify(newState));
  }

  changeSeasonFilter(season) {
    let newState = this.state;
    if (season === this.state.seasonFilter) {
      newState.seasonFilter = false;
    } else {
      newState.seasonFilter = season;
    }
    this.setState(newState);
    localStorage.setItem(globals.LS, JSON.stringify(newState));
  }

  authenticateUser(authenticated) {
    this.setState({ authenticated });
    // this.props.fetchUserData();
  }

  componentWillMount() {
    // get data from LS
    if (Object.keys(this.state).length === 0) {
      if (localStorage.getItem(globals.LS)) {
        this.setState(JSON.parse(localStorage.getItem(globals.LS)));
      } else {
        localStorage.setItem(globals.LS, JSON.stringify(globals.DEFAULT_STATE));
        this.setState(globals.DEFAULT_STATE);
      }
    }
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "/api/account/authenticated"
    }).then(res => {
      const { authenticated } = res.data;
      this.setState({ authenticated: authenticated ? true : false });
    });
  }

  render() {
    const {
      cc,
      upgrades,
      toolPickup,
      seasonFilter,
      authenticated
    } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Home authenticated={authenticated} />}
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
                  path={globals.URLS.COMMUNITY_CENTER}
                  render={() => (
                    <CCBundles
                      cc={cc}
                      toggleItem={this.toggleItem}
                      reset={this.reset}
                      seasonFilter={seasonFilter}
                      changeSeasonFilter={this.changeSeasonFilter}
                    />
                  )}
                />
                <Route
                  path={`${globals.URLS.COMMUNITY_CENTER}/list`}
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
                  path={globals.URLS.UPGRADES}
                  render={() => (
                    <Upgrades
                      upgrades={upgrades}
                      toolPickup={toolPickup}
                      toggleItem={this.toggleItem}
                      reset={this.reset}
                      setToolPickup={this.setToolPickup}
                    />
                  )}
                />
                <Route
                  path={globals.URLS.CALENDAR}
                  render={() => (
                    <Calendar
                      seasonFilter={seasonFilter}
                      changeSeasonFilter={this.changeSeasonFilter}
                    />
                  )}
                />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
