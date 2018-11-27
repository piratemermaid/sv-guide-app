import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as globals from "./utils/globals";

import Nav from "./components/Nav";
import Home from "./components/Home";
import CC from "./components/CC";
import Upgrades from "./components/Upgrades";
import Calendar from "./components/Calendar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.toggleCCItem = this.toggleCCItem.bind(this);
  }

  updateData(newState) {
    this.setState(newState);
    localStorage.setItem(globals.LS, JSON.stringify(newState));
  }

  updateLS(newData, type) {
    let newState = this.state;
    newState[type] = newData;
    localStorage.setItem(globals.LS, JSON.stringify(newState));
  }

  toggleCCItem(id) {
    let cc = this.state.cc;
    this.state.cc[id] === 0 ? (cc[id] = 1) : (cc[id] = 0);

    let newState = this.state;
    newState.cc = cc;
    this.setState(newState);
    localStorage.setItem(globals.LS, JSON.stringify(newState));
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

  render() {
    const { cc } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path={globals.URLS.COMMUNITY_CENTER}
                  render={() => <CC cc={cc} toggleCCItem={this.toggleCCItem} />}
                />
                <Route
                  path={`${globals.URLS.COMMUNITY_CENTER}/:season`}
                  render={() => <CC cc={cc} toggleCCItem={this.toggleCCItem} />}
                />
                <Route path={globals.URLS.UPGRADES} component={Upgrades} />
                <Route path={globals.URLS.CALENDAR} component={Calendar} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
