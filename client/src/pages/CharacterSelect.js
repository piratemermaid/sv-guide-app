import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const CharacterSelect = () => {
  return (
    <div>
      <div>
        <p>Please select a character to track.</p>
        <Link to="/">
          <Button>Ok!</Button>
        </Link>
      </div>
    </div>
  );
};

export default CharacterSelect;
