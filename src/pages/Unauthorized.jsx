import { useNavigate } from "react-router-dom";
import "../styles/unauthorized.css";

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="unauthorized-container">
      <div className="unauthorized-card">

        <h1>403</h1>

        <h2>Access Denied</h2>

        <p>
          You don't have permission to access this page.
        </p>

        <button onClick={() => navigate(-1)}>
          Go Back
        </button>

      </div>
    </div>
  );
}