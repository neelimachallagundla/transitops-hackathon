import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "fleet_manager",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
  e.preventDefault();

  if (!user.email || !user.password) {
    alert("Please fill all fields");
    return;
  }

  // Demo accounts
  const demoUsers = [
    {
      email: "fleet@transitops.com",
      password: "1234",
      role: "fleet_manager",
    },
    {
      email: "driver@transitops.com",
      password: "1234",
      role: "driver",
    },
    {
      email: "maintenance@transitops.com",
      password: "1234",
      role: "maintenance",
    },
    {
      email: "admin@transitops.com",
      password: "1234",
      role: "admin",
    },
  ];

  // Validate user
  const matchedUser = demoUsers.find(
    (demoUser) =>
      demoUser.email === user.email &&
      demoUser.password === user.password &&
      demoUser.role === user.role
  );

  if (!matchedUser) {
    alert("Invalid email, password, or selected role.");
    return;
  }

  // Save authenticated user
  login({
    email: matchedUser.email,
    role: matchedUser.role,
  });

  // Navigate based on role
  switch (matchedUser.role) {
    case "fleet_manager":
    case "admin":
      navigate("/dashboard");
      break;

    case "driver":
      navigate("/trips");
      break;

    case "maintenance":
      navigate("/maintenance");
      break;

    default:
      navigate("/");
  }
};

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>🚚 TransitOps</h1>

        <p>Smart Transport Operations Platform</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />

          <select
            name="role"
            value={user.role}
            onChange={handleChange}
          >
            <option value="fleet_manager">Fleet Manager</option>
            <option value="driver">Driver</option>
            <option value="maintenance">Maintenance Staff</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}