import {
  FaBell,
  FaSearch,
  FaMoon
} from "react-icons/fa";

import { useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

import "../styles/navbar.css";

export default function Navbar() {

  const { user } = useAuth();
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/vehicles": "Vehicles",
    "/drivers": "Drivers",
    "/trips": "Trips",
    "/maintenance": "Maintenance",
    "/expenses": "Expenses",
    "/reports": "Reports",
  };

  const title = pageTitles[location.pathname] || "TransitOps";

  const roleNames = {
    fleet_manager: "Fleet Manager",
    driver: "Driver",
    maintenance: "Maintenance Staff",
    admin: "Administrator",
  };

  return (

    <header className="navbar">

      <div>

        <h2>{title}</h2>

        <p>Welcome back 👋</p>

      </div>

      <div className="nav-right">

        <div className="search">

          <FaSearch />

          <input placeholder="Search..." />

        </div>

        <button className="icon">

          <FaBell />

        </button>

        <button className="icon">

          <FaMoon />

        </button>

        <div className="profile">

          <img
            src="https://i.pravatar.cc/45"
            alt="profile"
          />

          <div>

            <h4>{roleNames[user?.role] || "Guest"}</h4>

            <p>{user?.email || ""}</p>

          </div>

        </div>

      </div>

    </header>

  );

}