export const dashboardData = {
  activeVehicles: 42,
  availableVehicles: 30,
  maintenance: 5,
  activeTrips: 18,
  driversOnDuty: 24,
  fleetUtilization: "78%",
};

export const recentTrips = [
  {
    id: 1,
    vehicle: "TS09AB1234",
    driver: "Alex",
    destination: "Hyderabad",
    status: "Dispatched",
  },
  {
    id: 2,
    vehicle: "TS10CD5678",
    driver: "Ravi",
    destination: "Warangal",
    status: "Completed",
  },
  {
    id: 3,
    vehicle: "TS11EF9012",
    driver: "Priya",
    destination: "Vijayawada",
    status: "Pending",
  },
];

export const maintenanceAlerts = [
  {
    vehicle: "TS08KL1234",
    issue: "Oil Change",
    due: "Today",
  },
  {
    vehicle: "TS12MN5678",
    issue: "Brake Inspection",
    due: "Tomorrow",
  },
];