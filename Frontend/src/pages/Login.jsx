import React, { useState } from "react";
import { motion } from "framer-motion";
import "../components/Login.css";

const Login = () => {
    const [isSignup, setIsSignup] = useState(false); // Toggle between Login & Sign-Up

    return (
        <motion.div 
            className="login-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="login-box">
                <h2>{isSignup ? "Sign Up" : "Login"}</h2>
                
                <form>
                    {isSignup && (
                        <div className="input-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your full name" required />
                        </div>
                    )}

                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" required />
                    </div>

                    {isSignup && (
                        <div className="input-group">
                            <label>Confirm Password</label>
                            <input type="password" placeholder="Confirm your password" required />
                        </div>
                    )}

                    <button type="submit" className="login-btn">
                        {isSignup ? "Sign Up" : "Login"}
                    </button>
                </form>

                <p className="toggle-text" onClick={() => setIsSignup(!isSignup)}>
                    {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                </p>
            </div>
        </motion.div>
    );
};

export default Login;

