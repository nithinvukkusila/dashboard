import React from "react";
import dashboard from "../images/dashboard.png";
import fund from "../images/fund.png";
import offers from "../images/offers.png";
import report from "../images/report.png";
import backArrow from "../images/backArrow.png";

import transcation from "../images/transaction.png";
import { useState, useEffect } from "react";
const Drawer = ({ isOpen, isDrawerOpen }) => {
  const [selectedItem, setSelectedItem] = useState("");

  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([
      {
        id: 1,
        name: "DashBoard",
        src: dashboard,
      },
      {
        id: 2,
        name: "Investors",
        src: fund,
      },
      {
        id: 3,
        name: "Offerings",
        src: offers,
      },
      {
        id: 4,
        name: "Reporting",
        src: report,
      },
      {
        id: 5,
        name: "Transactions",
        src: transcation,
      },
    ]);
  }, []);

  return (
    <div className="drawer-container">
      <button onClick={isDrawerOpen} className="toggle-arrow">
        <img src={backArrow} alt="dashboard" />
      </button>
      <div className={`${isOpen ? "show" : "hide"} drawer`}>
      
        <div className="logo">
          <h1> LOGO </h1>
        </div>
        <div className="items">
          {items.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedItem(item.name);
                }}
                className={`item ${
                  selectedItem === item.name ? "selected" : ""
                }`}
              >
                <img src={item.src} alt="item icon" />
                <p>{item.name}</p>
              </div>
            );
          })}
          <div className="support">
            <button className="primary-btn">Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
