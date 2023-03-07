import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularBar = ({datasets}) => {
  const data = {
    datasets: datasets,
  };

  const options = {
    cutout: "70%",
    legend: {
      display: false,
    },
    centerText: {
      display: true,
      text: "280",
    },
    elements: {
      center: {
        text: "Totaxcv sdf sdf sl",
        color: "red", // Default is #000000
        fontStyle: "Arial", // Default is Arial
        sidePadding: 20, // Default is 20 (as a percentage)
        minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
        lineHeight: 25, // Default is 25 (in px), used for when text wraps
      },
    },
  };
  return (
    <div className="doughnut">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CircularBar;
