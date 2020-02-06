import React from "react";
import { Link } from "react-router-dom";

// TODO: show list of user characters & allow them
// to switch or create new
const Home = props => {
  return (
    <div className="container">
      <h3>Home</h3>
      {props.authenticated ? (
        "hi user"
      ) : (
        <div>
          <Link to="/login">Log in</Link> | <Link to="/signup">Sign up</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
