import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
import Drivers from "./pages/Drivers";
import Trips from "./pages/Trips";
import Maintenance from "./pages/Maintenance";
import Expenses from "./pages/Expenses";
import Reports from "./pages/Reports";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/maintenance" element={<Maintenance />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
}

export default App;