import React from "react";
import { Link } from "react-router-dom";

// TODO: show list of user characters & allow them
// to switch or create new

const Home = props => {
  async function accountLogout() {
    try {
      let response = await fetch("/api/account/logout");
      let success = await response.json();
      if (success) {
        props.authenticateUser(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <h3>Home</h3>
      {props.authenticated ? (
        <div>
          <p>hi user</p>
          <a onClick={() => accountLogout()}>Log out</a>
        </div>
      ) : (
        <div>
          <Link to="/login">Log in</Link> | <Link to="/signup">Sign up</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
