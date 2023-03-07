import React from "react";
import dots from "../images/dots.png";
const Category = ({ user }) => {
  return (
    <div className="category primary-box" key={user.id}>
      <div className="box-container">
        <div className="header">
          <img src={user.icon} alt="category" />
          <div>{user.type}</div>
        </div>
        <div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${user.invested}%`, background: user.background }}></div>
          </div>
        </div>
      </div>
      <div className="amount-container">
        <div className="actions">
          <img src={dots} alt="actions menu" />
        </div>
        <div className="amount-invested">
          <div className="invested">{user.invested}k</div>
          <div className="total">of {user.total}k</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
