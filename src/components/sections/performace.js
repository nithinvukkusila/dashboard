import BarGraph from "../barGraph/BarGraph";
import React from "react";
import { userData } from "../../userData";
const Performance = () => {
  return (
    <div className="performance section">
      <div className="section-header">
        <h3>Your Performance</h3>
        <div className="buttons">
          <button className="btn primary-btn">
            Primary
            <span className="arrow"> ^ </span>
          </button>
          <button className="btn primary-btn">
            Primary
            <span className="arrow">^</span>
          </button>
        </div>
      </div>
      <div className="graph-details">
        <div className="graph">
          <BarGraph />
        </div>
        <div className="other-details">
          <div className="buttons">
            <button className="primary-btn">By Asset Class</button>
            <button className="primary-btn">By Licenses</button>
          </div>
          <div className="category-performance">
            {userData.map((data) => {
              return (
                <div className="grid-item">
                  <p className="type">{data.type}</p>
                  <p className="amount">{data.invested}K</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
