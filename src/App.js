import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Page from "./components/Page";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/community_center" component={Page} />
                <Route path="/community_center/:season" component={Page} />
                <Route path="/upgrades" component={Page} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
