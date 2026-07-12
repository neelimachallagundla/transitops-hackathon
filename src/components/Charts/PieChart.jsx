import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function PieChart() {
  const data = {
    labels: [
      "Available",
      "On Trip",
      "Maintenance",
    ],
    datasets: [
      {
        data: [30, 18, 5],
        backgroundColor: [
          "#22C55E",
          "#3B82F6",
          "#F59E0B",
        ],
      },
    ],
  };

  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 12,
      }}
    >
      <h3>Vehicle Status</h3>

      <Pie data={data} />
    </div>
  );
}