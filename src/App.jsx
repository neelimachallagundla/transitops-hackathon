import { Routes, Route } from "react-router-dom";


import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
import Drivers from "./pages/Drivers";
import Trips from "./pages/Trips";
import Maintenance from "./pages/Maintenance";
import Expenses from "./pages/Expenses";
import Reports from "./pages/Reports";


import ProtectedRoute from "./auth/ProtectedRoute";
import Unauthorized from "./pages/Unauthorized";



function App() {


return (

<Routes>


<Route 
path="/" 
element={<Login />} 
/>



<Route

path="/dashboard"

element={

<ProtectedRoute

allowedRoles={[
"fleet_manager",
"admin"
]}

>

<Dashboard />
<Route
    path="/unauthorized"
    element={<Unauthorized />}
/>

</ProtectedRoute>

}

/>



<Route

path="/vehicles"

element={

<ProtectedRoute

allowedRoles={[
"fleet_manager",
"admin"
]}

>

<Vehicles />

</ProtectedRoute>

}

/>



<Route

path="/drivers"

element={

<ProtectedRoute

allowedRoles={[
"fleet_manager",
"admin"
]}

>

<Drivers />

</ProtectedRoute>

}

/>



<Route

path="/trips"

element={

<ProtectedRoute

allowedRoles={[
"fleet_manager",
"driver",
"admin"
]}

>

<Trips />

</ProtectedRoute>

}

/>



<Route

path="/maintenance"

element={

<ProtectedRoute

allowedRoles={[
"fleet_manager",
"maintenance",
"admin"
]}

>

<Maintenance />

</ProtectedRoute>

}

/>



<Route

path="/expenses"

element={

<ProtectedRoute

allowedRoles={[
"fleet_manager",
"admin"
]}

>

<Expenses />

</ProtectedRoute>

}

/>



<Route

path="/reports"

element={

<ProtectedRoute

allowedRoles={[
"fleet_manager",
"admin"
]}

>

<Reports />

</ProtectedRoute>

}

/>


</Routes>


);


}


export default App;