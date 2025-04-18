import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <motion.nav 
            className="navbar"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="logo">
                <Link to="/">HotelBooking</Link>
            </div>

            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                
                <li><Link to="/booking">Booking</Link></li>
                <li><Link to="/login" className="login-btn">Login</Link></li>
            </ul>
        </motion.nav>
    );
};

export default Navbar;



