import "./HomePage.css";
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: { scale: 1.1, transition: { duration: 0.2 } }, // Slight enlarge on hover
  tap: { scale: 0.9 }, // Slight shrink on click
};

const HomePage = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light text-dark">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="display-4 fw-bold mb-3"> Mess Feedback System</h1>
        <p className="lead mb-4">Your feedback helps us improve the mess experience. Share your opinions today!</p>
        <div className="d-flex gap-3 justify-content-center">
          <Link to="/login">
            <motion.button 
              className="btn btn-success btn-lg px-4"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Login
            </motion.button>
          </Link>
          <Link to="/register">
            <motion.button 
              className="btn btn-light btn-lg px-3"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Sign Up
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
