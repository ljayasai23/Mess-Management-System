import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaHome, 
  FaUser, 
  FaEnvelope, 
  FaInfoCircle, 
  FaCog, 
  FaSignOutAlt,
  FaBell,
  FaMoon,
  FaSun
} from 'react-icons/fa';
import useClickOutside from '../hooks/useClickOutside';
import './UserHeader.css';

const UserHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  const handleLogout = () => {
    // Add your actual logout logic here
    console.log('Logging out...');
    navigate('/login');
    closeDropdown();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Implement dark mode logic
    document.body.classList.toggle('dark-mode');
  };

  // Custom hook to handle clicks outside dropdown
  useClickOutside(dropdownRef, closeDropdown);

  return (
    <header className="user-header">
      <div className="user-header-left">
        <h1>My Mess Dashboard</h1>
        <nav className="user-nav">
          <Link to="/user" className="nav-link">
            <FaHome className="nav-icon" /> Home
          </Link>
          <Link to="/user/profile" className="nav-link">
            <FaUser className="nav-icon" /> Profile
          </Link>
          <Link to="/contact" className="nav-link">
            <FaEnvelope className="nav-icon" /> Contact
          </Link>
          <Link to="/about" className="nav-link">
            <FaInfoCircle className="nav-icon" /> About
          </Link>
        </nav>
      </div>
      
      <div className="user-header-right">
        <div 
          className="user-profile"
          onClick={toggleDropdown}
          ref={dropdownRef}
        >
          <span className="user-name">User One</span>
          <div className="user-avatar">U</div>
          
          {isDropdownOpen && (
            <div className="user-dropdown">
              <div className="dropdown-header">
                <div className="user-avatar large">U</div>
                <div className="user-info">
                  <div className="user-display-name">User One</div>
                  <div className="user-email">user@example.com</div>
                </div>
              </div>
              
              <Link to="/user/profile" className="dropdown-item" onClick={closeDropdown}>
                <FaUser className="dropdown-icon" /> My Profile
              </Link>
              <Link to="/settings" className="dropdown-item" onClick={closeDropdown}>
                <FaCog className="dropdown-icon" /> Settings
              </Link>
              <Link to="/notifications" className="dropdown-item" onClick={closeDropdown}>
                <FaBell className="dropdown-icon" /> Notifications
              </Link>
              
              <div className="dropdown-divider"></div>
              
              <button className="dropdown-item" onClick={toggleDarkMode}>
                {darkMode ? (
                  <>
                    <FaSun className="dropdown-icon" /> Light Mode
                  </>
                ) : (
                  <>
                    <FaMoon className="dropdown-icon" /> Dark Mode
                  </>
                )}
              </button>
              
              <div className="dropdown-divider"></div>
              
              <button className="dropdown-item logout" onClick={handleLogout}>
                <FaSignOutAlt className="dropdown-icon" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default UserHeader;