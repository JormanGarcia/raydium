import React from "react";
import "./style.scss";

export const Stats = ({ icon, number, title }) => {
  return (
    <div className="stats--container">
      <div className="stats-icon--container">{icon}</div>
      <div className="stats--info">
        <span className="number">{number}</span>
        <span className="title">{title}</span>
      </div>
    </div>
  );
};
