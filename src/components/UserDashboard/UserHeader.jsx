import React, { useState, useRef, useContext } from 'react';
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
  FaSun,
  FaBellSlash,
  FaCheck
} from 'react-icons/fa';
import { DarkModeContext } from '../../context/DarkModeContext';
import useClickOutside from '../hooks/useClickOutside';
import './UserHeader.css';

const UserHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showSettingsSaved, setShowSettingsSaved] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/login');
    closeDropdown();
  };

  const toggleDarkMode = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setDarkMode(!darkMode);
  };

  const toggleNotifications = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setNotificationsEnabled(!notificationsEnabled);
    console.log(`Notifications ${notificationsEnabled ? 'disabled' : 'enabled'}`);
  };

  const handleSettingsSave = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setShowSettingsSaved(true);
    setTimeout(() => setShowSettingsSaved(false), 2000);
    console.log('Settings saved');
  };

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
            <div className="user-dropdown" onClick={(e) => e.stopPropagation()}>
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
              
              <div className="dropdown-item" onClick={toggleNotifications}>
                {notificationsEnabled ? (
                  <>
                    <FaBell className="dropdown-icon" /> Notifications: On
                  </>
                ) : (
                  <>
                    <FaBellSlash className="dropdown-icon" /> Notifications: Off
                  </>
                )}
              </div>
              
              <div className="dropdown-item settings-item" onClick={(e) => e.stopPropagation()}>
                <div className="settings-label">
                  <FaCog className="dropdown-icon" /> Settings
                </div>
                <div>
                {showSettingsSaved && (
                  <span className="settings-saved">
                    <FaCheck /> Saved
                  </span>
                )}
                </div>
                <button 
                  className="settings-save-btn"
                  onClick={handleSettingsSave}
                >
                  Save
                </button>
              </div>
              
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