import React from "react";
import { Link } from "react-router-dom";
import "../styles/Play.css";

const Play = () => {
  const setChoice = (value) => {
    localStorage.setItem("choice", value);
    console.log(value);
  };

  return (
    <div className="play">
      <div className="items">
        <Link
          to="/game"
          className="Link"
          onClick={() => {
            setChoice("paper");
          }}
        >
          Kertas
        </Link>
        <Link
          to="/game"
          className="Link"
          onClick={() => {
            setChoice("scissors");
          }}
        >
          Gunting
        </Link>
        <Link
          to="/game"
          className="Link"
          onClick={() => {
            setChoice("rock");
          }}
        >
          Batu
        </Link>
      </div>
    </div>
  );
};

export default Play;
