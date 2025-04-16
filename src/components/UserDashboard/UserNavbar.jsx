import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import './UserNavbar.css'; // We'll add styles to existing file

const UserNavbar = () => {
  return (
    <nav className="user-navbar">
      <div className="nav-brand">Mess Dashboard</div>
      
      <div className="nav-links">
        <Link to="/user/profile" className="nav-link">
          <FaUser className="nav-icon" /> Profile
        </Link>
        <Link to="/contact" className="nav-link">
          <FaEnvelope className="nav-icon" /> Contact
        </Link>
        <Link to="/about" className="nav-link">
          <FaInfoCircle className="nav-icon" /> About
        </Link>
      </div>
    </nav>
  );
};

export default UserNavbar;