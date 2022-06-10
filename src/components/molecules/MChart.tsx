import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Net",
      data: [33, 55, 35, 77],
      backgroundColor: "#37B04C",
      stack: "Stack 0",
    },
    {
      label: "Gross",
      data: [33, 56, 35, 77],
      backgroundColor: "#289E45",
      stack: "Stack 0",
    },
    {
      label: "Average Purchase Values",
      data: [33, 56, 35, 77],
      backgroundColor: "#7AE28C",
      stack: "Stack 0",
    },
    {
      label: "Unit per Transaction",
      data: [33, 56, 35, 77],
      backgroundColor: "#707070",
      stack: "Stack 0",
    },
  ],
};

export const options = {
  interaction: {
    intersect: false,
  },
  responsive: true,
  aspectRatio: 2,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const MChart = () => {
  return (
    <aside className="mt-5">
      <Bar options={options} data={data} />
    </aside>
  );
};

export default MChart;
