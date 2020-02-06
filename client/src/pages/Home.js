import React from "react";

// TODO: show list of user characters & allow them
// to switch or create new
const Home = props => {
  return (
    <div className="container">
      <h3>Home</h3>
      {props.authenticated ? "hi user" : "login or signup"}
      {/* <a onClick={}>Signup</a> */}
      {/* {" | "} */}
      {/* <a onClick={}>Login</a> */}
    </div>
  );
};

export default Home;
