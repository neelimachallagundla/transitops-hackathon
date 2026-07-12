# 🚚 TransitOps - Smart Transport Operations Platform

TransitOps is a role-based Fleet Management System designed to streamline transportation operations for logistics and fleet companies. It provides a centralized platform to manage vehicles, drivers, trips, maintenance schedules, expenses, and reports through an intuitive dashboard.

---

## 📌 Features

- 🔐 Role-Based Authentication
- 📊 Interactive Dashboard
- 🚛 Vehicle Management
- 👨‍✈️ Driver Management
- 🛣️ Trip Management
- 🔧 Maintenance Tracking
- 💰 Expense Management
- 📈 Reports & Analytics
- 📱 Responsive User Interface

---

## 👥 User Roles

### Fleet Manager
- Dashboard
- Vehicle Management
- Driver Management
- Trip Management
- Maintenance Management
- Expense Tracking
- Reports

### Driver
- View Assigned Trips

### Maintenance Staff
- View Maintenance Module

### Administrator
- Full System Access

---

# 🔑 Demo Login Credentials

Use the following demo accounts to test different roles.

| Role | Email | Password |
|------|-------|----------|
| Fleet Manager | `fleet@transitops.com` | `1234` |
| Driver | `driver@transitops.com` | `1234` |
| Maintenance Staff | `maintenance@transitops.com` | `1234` |
| Administrator | `admin@transitops.com` | `1234` |

> **Note:** Select the corresponding role from the Role dropdown while logging in.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- CSS3
- React Icons

### Backend *(Planned / In Progress)*
- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

## 📂 Project Structure

```text
src/
│
├── auth/
│   ├── AuthContext.jsx
│   └── ProtectedRoute.jsx
│
├── components/
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── StatCard.jsx
│   └── Charts.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Vehicles.jsx
│   ├── Drivers.jsx
│   ├── Trips.jsx
│   ├── Maintenance.jsx
│   ├── Expenses.jsx
│   ├── Reports.jsx
│   └── Unauthorized.jsx
│
├── styles/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/neelimachallagundla/transitops-hackathon.git
```

Navigate to the project

```bash
cd transitops-hackathon
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open your browser

```
http://localhost:5173
```

---

## 🔐 Authentication

TransitOps currently demonstrates frontend role-based authentication using React Context API.

The system supports:

- Session Management
- Protected Routes
- Role-Based Navigation
- Dynamic Sidebar
- Dynamic Navbar
- Logout Functionality
- Unauthorized (403) Page

Backend authentication with JWT and MongoDB is planned for future implementation.

---

## 📊 Modules

- Dashboard
- Vehicles
- Drivers
- Trips
- Maintenance
- Expenses
- Reports

---

## 🎯 Future Enhancements

- JWT Authentication
- MongoDB Integration
- REST APIs
- Real-Time GPS Tracking
- Driver Mobile Application
- Fuel Consumption Analytics
- Predictive Maintenance
- Notification System
- Export Reports (PDF & Excel)
- Dark Mode
- Multi-Organization Support

---

## 👩‍💻 Developed By

Team Crusaders

Hackathon Project

---

## 📄 License

This project is developed for educational and hackathon purposes.