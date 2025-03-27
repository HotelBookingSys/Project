import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/DashBoard.css"; // Import styles

const Dashboard = ({ role }) => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <h2>Dashboard</h2>
                <ul>
                    <li onClick={() => navigate("/profile")}>Edit Profile</li>
                    <li onClick={() => navigate("/logout")}>Logout</li>
                    {role === "owner" && (
                        <>
                            <li onClick={() => navigate("/manage-hotels")}>Manage Hotels</li>
                            <li onClick={() => navigate("/analytics")}>View Analytics</li>
                        </>
                    )}
                    {role === "user" && (
                        <>
                            <li onClick={() => navigate("/bookings")}>My Bookings</li>
                            <li onClick={() => navigate("/search")}>Search Hotels</li>
                        </>
                    )}
                </ul>
            </aside>

            {/* Main Dashboard Content */}
            <main className="dashboard-content">
                <h1>Welcome, {role === "owner" ? "Hotel Owner" : "User"}!</h1>
                <p>
                    {role === "owner"
                        ? "Manage your hotels, track bookings, and analyze performance."
                        : "View your bookings and explore new hotels."}
                </p>
            </main>
        </div>
    );
};

export default Dashboard;
