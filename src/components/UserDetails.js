import React from "react";
import MarketInSights from "./MarketInSights";
import UserTargets from "./sections/userTargets";
import Performance from "./sections/performace";
import InvestorsDetails from "./sections/investorsDetails";
const UserDetails = ({ isDrawerOpen }) => {
  return (
    <div className="main-block">
      <div className="heading">
        <h1> Hi user </h1>
      </div>
      <div className="user-details">
        <div className="details">
         
          <div className="container">
            <UserTargets />
            <Performance />
            <InvestorsDetails />
          </div>
        </div>
        <MarketInSights />
      </div>
    </div>
  );
};

export default UserDetails;
