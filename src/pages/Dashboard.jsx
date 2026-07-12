import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import PieChart from "../components/charts/PieChart";
import LineChart from "../components/charts/LineChart";
import {
  FaTruck,
  FaCheckCircle,
  FaTools,
  FaRoute,
  FaUserTie,
  FaChartLine,
} from "react-icons/fa";

import "../styles/dashboard.css";

import {
  dashboardData,
  recentTrips,
  maintenanceAlerts,
} from "../data/dummyData";

export default function Dashboard() {
  return (
    <Layout>
      <div className="dashboard">

        <div className="dashboard-header">
          <div>
            <h1>Fleet Dashboard</h1>
            <p>Welcome back, Fleet Manager 👋</p>
          </div>
        </div>

        {/* KPI Cards */}

        <div className="stats-grid">

  <StatCard
    icon={<FaTruck />}
    title="Active Vehicles"
    value={dashboardData.activeVehicles}
    color="#2563EB"
    growth="+8% this month"
  />

  <StatCard
    icon={<FaCheckCircle />}
    title="Available Vehicles"
    value={dashboardData.availableVehicles}
    color="#22C55E"
    growth="+5% this month"
  />

  <StatCard
    icon={<FaTools />}
    title="Maintenance"
    value={dashboardData.maintenance}
    color="#F59E0B"
    growth="2 due today"
  />

  <StatCard
    icon={<FaRoute />}
    title="Active Trips"
    value={dashboardData.activeTrips}
    color="#8B5CF6"
    growth="+11% this week"
  />

  <StatCard
    icon={<FaUserTie />}
    title="Drivers On Duty"
    value={dashboardData.driversOnDuty}
    color="#EF4444"
    growth="95% available"
  />

  <StatCard
    icon={<FaChartLine />}
    title="Fleet Utilization"
    value={dashboardData.fleetUtilization}
    color="#06B6D4"
    growth="+4% this week"
  />

</div>

        {/* Charts */}

        <div className="chart-grid">

          <PieChart />

          <LineChart />

        </div>

        {/* Recent Trips */}

        <div className="section">

          <h2>Recent Trips</h2>

          <table>

            <thead>

              <tr>

                <th>Vehicle</th>

                <th>Driver</th>

                <th>Destination</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {recentTrips.map((trip) => (

                <tr key={trip.id}>

                  <td>{trip.vehicle}</td>

                  <td>{trip.driver}</td>

                  <td>{trip.destination}</td>

                  <td>

                    <span
                      className={`status ${trip.status.toLowerCase()}`}
                    >
                      {trip.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Maintenance */}

        <div className="section">

          <h2>Maintenance Alerts</h2>

          <div className="alert-box">

            {maintenanceAlerts.map((item, index) => (

              <div
                key={index}
                className="alert"
              >

                <strong>{item.vehicle}</strong>

                <br />

                {item.issue}

                <br />

                <small>Due: {item.due}</small>

              </div>

            ))}

          </div>

        </div>

      </div>
    </Layout>
  );
}