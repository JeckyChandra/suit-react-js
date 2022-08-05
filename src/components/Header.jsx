import React from "react";
import "../styles/Head.css"

const Header = ({ score }) => {
  return (
    <div className="header">
      <div className="text">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="container-score">
      <div className="score-box">
        <span>Score</span>
        <div className="score-box__score">{score}</div>
      </div>
      </div>
    </div>
  );
};

export default Header;