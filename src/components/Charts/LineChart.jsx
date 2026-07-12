import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function LineChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
    ],
    datasets: [
      {
        label: "Trips",
        data: [18, 24, 32, 28, 40, 48],
        borderColor: "#2563EB",
        tension: 0.4,
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
      <h3>Monthly Trips</h3>

      <Line data={data} />
    </div>
  );
}