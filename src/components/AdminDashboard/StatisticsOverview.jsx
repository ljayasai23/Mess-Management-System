import React from 'react';
import './StatisticsOverview.css';

const StatisticsOverview = ({ data }) => {
  return (
    <div className="stats-container">
      <h3>Statistics Overview</h3>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{data.totalUsers}</div>
          <div className="stat-label">Total Users</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{data.activeUsers}</div>
          <div className="stat-label">Active Users</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{data.mealsServed}</div>
          <div className="stat-label">Meals Served</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{data.complaints}</div>
          <div className="stat-label">Complaints</div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsOverview;