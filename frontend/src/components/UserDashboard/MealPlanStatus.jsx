import React from 'react';
import './MealPlanStatus.css';

const MealPlanStatus = ({ plan }) => {
  const calculateProgress = () => {
    // This would be calculated based on plan duration in a real app
    return 65; // percentage
  };

  return (
    <div className="meal-plan-status">
      <h3>My Meal Plan</h3>
      <div className="plan-details">
        <div className="plan-name">{plan.name}</div>
        <div className={`plan-status ${plan.status}`}>{plan.status}</div>
        
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
          <div className="progress-text">{calculateProgress()}% used</div>
        </div>
        
        <div className="plan-metrics">
          <div className="metric">
            <div className="metric-value">{plan.remainingDays}</div>
            <div className="metric-label">Days Left</div>
          </div>
          <div className="metric">
            <div className="metric-value">{plan.mealsLeft}</div>
            <div className="metric-label">Meals Left</div>
          </div>
          <div className="metric">
            <div className="metric-value">{plan.nextRenewal}</div>
            <div className="metric-label">Renewal Date</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlanStatus;