import {
  FaChartPie,
  FaTruck,
  FaUserTie,
  FaRoute,
  FaTools,
  FaMoneyBillWave,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

import "../styles/sidebar.css";

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const role = user?.role;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="logo">
        🚚 TransitOps
      </div>

      <div
        style={{
          color: "#fff",
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "14px",
        }}
      >
        <strong>
          {role?.replace("_", " ").toUpperCase()}
        </strong>
      </div>

      <nav>

        {/* Fleet Manager & Admin */}

        {(role === "fleet_manager" || role === "admin") && (
          <>
            <NavLink to="/dashboard">
              <FaChartPie />
              <span>Dashboard</span>
            </NavLink>

            <NavLink to="/vehicles">
              <FaTruck />
              <span>Vehicles</span>
            </NavLink>

            <NavLink to="/drivers">
              <FaUserTie />
              <span>Drivers</span>
            </NavLink>

            <NavLink to="/trips">
              <FaRoute />
              <span>Trips</span>
            </NavLink>

            <NavLink to="/maintenance">
              <FaTools />
              <span>Maintenance</span>
            </NavLink>

            <NavLink to="/expenses">
              <FaMoneyBillWave />
              <span>Expenses</span>
            </NavLink>

            <NavLink to="/reports">
              <FaChartBar />
              <span>Reports</span>
            </NavLink>
          </>
        )}

        {/* Driver */}

        {role === "driver" && (
          <NavLink to="/trips">
            <FaRoute />
            <span>My Trips</span>
          </NavLink>
        )}

        {/* Maintenance */}

        {role === "maintenance" && (
          <NavLink to="/maintenance">
            <FaTools />
            <span>Maintenance</span>
          </NavLink>
        )}

      </nav>

      <button className="logout" onClick={handleLogout}>
        <FaSignOutAlt />
        Logout
      </button>
    </div>
  );
}