import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "../styles/layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">

      <Sidebar />

      <div className="main">

        <Navbar />

        <main className="content">

          {children}

        </main>

      </div>

    </div>
  );
}