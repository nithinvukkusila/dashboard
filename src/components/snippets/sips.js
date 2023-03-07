import React from "react";

const Sips = ({ title, totalAmount, totalSips }) => {
  return (
    <div className="sips">
      <div className="title">{title}</div>
      <div className="amount-and-sips">
        <div className="total-amount">
          <p>Total Amount</p>
          <p>{totalAmount}</p>
        </div>
        <div className="total-sips">
          <p>Total SIPs</p>
          <p>{totalSips}</p>
        </div>
      </div>
      <div className="button">
        <button className="primary-btn">View All</button>
      </div>
    </div>
  );
};

export default Sips;
