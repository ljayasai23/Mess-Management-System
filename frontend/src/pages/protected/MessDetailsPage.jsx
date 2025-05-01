import React, { useState } from 'react';
import { 
  FiHome, 
  FiUsers, 
  FiDollarSign, 
  FiCalendar,
  FiSettings 
} from 'react-icons/fi';
import './MessDetailsPage.css';
import AdminHeader from '../../components/AdminDashboard/AdminHeader';

const MessDetailsPage = () => {
  const [activeTab, setActiveTab] = useState('basic');

  // Sample mess data
  const [messDetails, setMessDetails] = useState({
    name: "Green Valley Mess",
    address: "123 Campus Road, University Area",
    capacity: 120,
    currentOccupancy: 98,
    mealTimings: {
      breakfast: "7:00 AM - 9:00 AM",
      lunch: "12:30 PM - 2:30 PM",
      dinner: "7:30 PM - 9:30 PM"
    },
    monthlyRates: {
      single: 3500,
      sharing: 2800
    },
    rules: [
      "No outside food after 10 PM",
      "Mandatory monthly payment by 5th",
      "Guests allowed only on weekends"
    ]
  });

  return (
    <div className="mdp-container">
      <AdminHeader/>
      <header className="mdp-header">
        <h1>
          <FiHome className="mdp-header-icon" />
          Mess Management
        </h1>
        <div className="mdp-tabs">
          <button 
            className={`mdp-tab ${activeTab === 'basic' ? 'active' : ''}`}
            onClick={() => setActiveTab('basic')}
          >
            Basic Info
          </button>
          <button 
            className={`mdp-tab ${activeTab === 'timings' ? 'active' : ''}`}
            onClick={() => setActiveTab('timings')}
          >
            Meal Timings
          </button>
          <button 
            className={`mdp-tab ${activeTab === 'financial' ? 'active' : ''}`}
            onClick={() => setActiveTab('financial')}
          >
            Financials
          </button>
          <button 
            className={`mdp-tab ${activeTab === 'rules' ? 'active' : ''}`}
            onClick={() => setActiveTab('rules')}
          >
            Rules
          </button>
        </div>
      </header>

      <div className="mdp-content">
        {activeTab === 'basic' && (
          <div className="mdp-basic-info">
            <div className="mdp-detail-card">
              <h2><FiHome /> Basic Information</h2>
              <div className="mdp-detail-row">
                <span>Mess Name:</span>
                <strong>{messDetails.name}</strong>
              </div>
              <div className="mdp-detail-row">
                <span>Address:</span>
                <strong>{messDetails.address}</strong>
              </div>
              <div className="mdp-detail-row">
                <span>Capacity:</span>
                <strong>{messDetails.capacity} students</strong>
              </div>
              <div className="mdp-detail-row">
                <span>Current Occupancy:</span>
                <strong>{messDetails.currentOccupancy} students</strong>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'timings' && (
          <div className="mdp-timings">
            <div className="mdp-detail-card">
              <h2><FiCalendar /> Meal Timings</h2>
              <div className="mdp-detail-row">
                <span>Breakfast:</span>
                <strong>{messDetails.mealTimings.breakfast}</strong>
              </div>
              <div className="mdp-detail-row">
                <span>Lunch:</span>
                <strong>{messDetails.mealTimings.lunch}</strong>
              </div>
              <div className="mdp-detail-row">
                <span>Dinner:</span>
                <strong>{messDetails.mealTimings.dinner}</strong>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'financial' && (
          <div className="mdp-financial">
            <div className="mdp-detail-card">
              <h2><FiDollarSign /> Monthly Rates</h2>
              <div className="mdp-detail-row">
                <span>Single Occupancy:</span>
                <strong>₹{messDetails.monthlyRates.single}</strong>
              </div>
              <div className="mdp-detail-row">
                <span>Sharing Occupancy:</span>
                <strong>₹{messDetails.monthlyRates.sharing}</strong>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="mdp-rules">
            <div className="mdp-detail-card">
              <h2><FiSettings /> Mess Rules</h2>
              <ul className="mdp-rules-list">
                {messDetails.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="mdp-action-buttons">
        <button className="mdp-edit-btn">
          Edit Details
        </button>
        <button className="mdp-print-btn">
          Print Summary
        </button>
      </div>
    </div>
  );
};

export default MessDetailsPage;