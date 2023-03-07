import React from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import { Bar } from "react-chartjs-2";

Chart.register({
  id: "x-axis-0",
  type: "time",
  time: {
    displayFormats: {
      month: "MMM",
    },
    tooltipFormat: "MMM YYYY",
  },
  ticks: {
    source: "auto",
    autoSkip: true,
    maxRotation: 0,
    sampleSize: 100,
  },
});

Chart.register({
  id: "y-axis-0",
  type: "linear",
});
const data = {
  labels: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  datasets: [
    {
      label: "Revenue",
      data: [28, 48, 40, 19, 26, 27, 30, 20, 40, 50, 10, 20],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      pointStyle: "Dash",
    },
  ],
};

const options = {
  scales: {
    x: {
      grid: {
        display: false,           
        drawOnChartArea: false
      },
    },
    y: {
      ticks: {
        display: false,tickColr: 'blue', tickWidth: '10'

      },
      grid: {
        display: true,
      },
    },
  },
};

const BarGraph = () => {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
