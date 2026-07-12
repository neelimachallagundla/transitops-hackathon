import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "Fleet Manager",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (user.email === "" || user.password === "") {
      alert("Please fill all fields");
      return;
    }

    navigate("/dashboard");
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
            <option>Fleet Manager</option>
            <option>Dispatcher</option>
            <option>Safety Officer</option>
            <option>Financial Analyst</option>
          </select>

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}