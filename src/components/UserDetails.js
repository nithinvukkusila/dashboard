import React from "react";
import MarketInSights from "./MarketInSights";
import UserTargets from "./sections/userTargets";
import Performance from "./sections/performace";
import InvestorsDetails from "./sections/investorsDetails";
import search from '../images/search.png'
import bell from '../images/bell.png'
import user from '../images/user.png'
const UserDetails = ({ isDrawerOpen }) => {
  return (
    <div className="main-block">
      <div className="heading">
        <h1> Hi user </h1>
        <div className="header-icons">
         <img src={search} alt="search"></img>
         <img src={bell} alt="bell"></img>
         <img src={user} alt="user"></img>

        </div>

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
