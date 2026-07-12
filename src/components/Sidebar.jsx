import {
  FaTruck,
  FaCar,
  FaUserTie,
  FaRoute,
  FaTools,
  FaMoneyBillWave,
  FaChartBar,
  FaSignOutAlt
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">
        🚚 TransitOps
      </div>

      <nav>

        <NavLink to="/dashboard">
          <FaTruck />
          Dashboard
        </NavLink>

        <NavLink to="/vehicles">
          <FaCar />
          Vehicles
        </NavLink>

        <NavLink to="/drivers">
          <FaUserTie />
          Drivers
        </NavLink>

        <NavLink to="/trips">
          <FaRoute />
          Trips
        </NavLink>

        <NavLink to="/maintenance">
          <FaTools />
          Maintenance
        </NavLink>

        <NavLink to="/expenses">
          <FaMoneyBillWave />
          Expenses
        </NavLink>

        <NavLink to="/reports">
          <FaChartBar />
          Reports
        </NavLink>

      </nav>

      <button className="logout">
        <FaSignOutAlt />
        Logout
      </button>

    </div>
  );
}