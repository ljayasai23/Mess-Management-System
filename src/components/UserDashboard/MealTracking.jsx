import React from 'react';
import './MealTracking.css';

const MealTracking = ({ history }) => {
  return (
    <div className="meal-tracking">
      <h3>Meal Consumption History</h3>
      <div className="tracking-table">
        <div className="table-header">
          <div className="header-cell">Date</div>
          <div className="header-cell">Breakfast</div>
          <div className="header-cell">Lunch</div>
          <div className="header-cell">Dinner</div>
          <div className="header-cell">Total</div>
        </div>
        {history.map((day, index) => (
          <div key={index} className="table-row">
            <div className="row-cell date-cell">{day.date}</div>
            <div className={`row-cell ${day.breakfast ? 'present' : 'absent'}`}>
              {day.breakfast ? '✓' : '✗'}
            </div>
            <div className={`row-cell ${day.lunch ? 'present' : 'absent'}`}>
              {day.lunch ? '✓' : '✗'}
            </div>
            <div className={`row-cell ${day.dinner ? 'present' : 'absent'}`}>
              {day.dinner ? '✓' : '✗'}
            </div>
            <div className="row-cell total-cell">
              {(day.breakfast ? 1 : 0) + (day.lunch ? 1 : 0) + (day.dinner ? 1 : 0)}/3
            </div>
          </div>
        ))}
      </div>
      <div className="tracking-summary">
        <div className="summary-card">
          <div className="summary-value">
            {history.filter(day => day.breakfast).length}
          </div>
          <div className="summary-label">Breakfasts</div>
        </div>
        <div className="summary-card">
          <div className="summary-value">
            {history.filter(day => day.lunch).length}
          </div>
          <div className="summary-label">Lunches</div>
        </div>
        <div className="summary-card">
          <div className="summary-value">
            {history.filter(day => day.dinner).length}
          </div>
          <div className="summary-label">Dinners</div>
        </div>
      </div>
    </div>
  );
};

export default MealTracking;