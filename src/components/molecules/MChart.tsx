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
      data: [33, 55, 35, 77, 66, 86, 135, 89, 11, 91, 34, 55],
      backgroundColor: "#37B04C",
      stack: "Stack 0",
    },
    {
      label: "Gross",
      data: [32, 15, 45, 57, 66, 26, 115, 69, 61, 41, 74, 85],
      backgroundColor: "#289E45",
      stack: "Stack 0",
    },
    {
      label: "Average Purchase Values",
      data: [11, 25, 35, 47, 16, 56, 105, 69, 78, 86, 44, 85],
      backgroundColor: "#7AE28C",
      stack: "Stack 0",
    },
    {
      label: "Unit per Transaction",
      data: [55, 65, 75, 87, 65, 84, 155, 77, 17, 33, 38, 65],
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
