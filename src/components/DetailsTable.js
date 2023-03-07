import React from "react";
import { investorsDetails } from "../userData";

const DetailsTable = () => {
  return (
    <table>
      <tbody>
      <tr>
        <th>Investor's Name</th>
        <th>Total Investments</th>
        <th>Active SIPs</th>
        <th>Last Transactions</th>
        <th>Profile Status</th>
      </tr>
      {investorsDetails.map((data) => {
        return (
          <tr>
            <td>{data.investor}</td>
            <td>{data.totalInvestments}</td>
            <td>{data.activeSips}</td>
            <td>{data.lastTransactions}</td>
            <td>{data.profileStatus}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};

export default DetailsTable;
