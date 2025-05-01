import React, { useState, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaTachometerAlt, 
  FaBuilding, 
  FaHistory,
  FaFileInvoiceDollar,
  FaUserShield,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaBellSlash,
  FaSun,
  FaMoon,
  FaCheck
} from 'react-icons/fa';
import { DarkModeContext } from '../../context/DarkModeContext';
import useClickOutside from '../hooks/useClickOutside';
import './AdminHeader.css';

const AdminHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showSettingsSaved, setShowSettingsSaved] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  const handleLogout = () => {
    console.log('Admin logging out...');
    navigate('/login');
    closeDropdown();
  };

  const toggleDarkMode = (e) => {
    e.stopPropagation();
    setDarkMode(!darkMode);
  };

  const toggleNotifications = (e) => {
    e.stopPropagation();
    setNotificationsEnabled(!notificationsEnabled);
    console.log(`Notifications ${notificationsEnabled ? 'disabled' : 'enabled'}`);
  };

  const handleSettingsSave = (e) => {
    e.stopPropagation();
    setShowSettingsSaved(true);
    setTimeout(() => setShowSettingsSaved(false), 2000);
    console.log('Admin settings saved');
  };

  useClickOutside(dropdownRef, closeDropdown);

  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <h1>Mess Management Admin</h1>
        <nav className="admin-nav">
          <Link to="/admin" className="nav-link">
            <FaTachometerAlt className="nav-icon" /> Dashboard
          </Link>
          <Link to="/admin/profile" className="nav-link" onClick={closeDropdown}>
            <FaUserShield className="nav-icon" /> Admin Profile
          </Link>
          <Link to="/admin/mess-details" className="nav-link">
            <FaBuilding className="nav-icon" /> Mess Details
          </Link>
          <Link to="/admin/audit-logs" className="nav-link">
            <FaHistory className="nav-icon" /> Audit Logs
          </Link>
          <Link to="/admin/billing" className="nav-link">
            <FaFileInvoiceDollar className="nav-icon" /> Billing
          </Link>
         
          
        </nav>
      </div>
      
      <div className="admin-header-right">
        <div 
          className="admin-profile"
          onClick={toggleDropdown}
          ref={dropdownRef}
        >
          <span className="admin-name">Admin User</span>
          <div className="admin-avatar">
            <FaUserShield />
          </div>
          
          {isDropdownOpen && (
            <div className="admin-dropdown" onClick={(e) => e.stopPropagation()}>
              <div className="dropdown-header">
                <div className="admin-avatar large">
                  <FaUserShield />
                </div>
                <div className="admin-info">
                  <div className="admin-display-name">Admin User</div>
                  <div className="admin-email">admin@messmanagement.com</div>
                </div>
              </div>
              
              <Link to="/admin/profile" className="dropdown-item" onClick={closeDropdown}>
                <FaUserShield className="dropdown-icon" /> Admin Profile
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
                  <FaCog className="dropdown-icon" /> System Settings
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

export default AdminHeader;