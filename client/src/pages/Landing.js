import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <p>You are not logged in.</p>
      <div>
        <Link to="/login">Log in</Link> | <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Landing;
