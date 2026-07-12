import "../styles/Navbar.css";
export default function Navbar() {

  return (

    <div className="navbar">

      <h2>Transport Operations Dashboard</h2>

      <div className="right">

        <input
          type="text"
          placeholder="Search..."
        />

        <div className="profile">

          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />

          <div>
            <strong>Fleet Manager</strong>
            <p>Admin</p>
          </div>

        </div>

      </div>

    </div>

  );
}