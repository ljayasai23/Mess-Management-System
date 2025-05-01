import React from 'react';
import './MealTracking.css';

const MealTracking = ({ history }) => {
  return (
    <div className="mt-container">
      <h3 className="mt-title">Meal Consumption History</h3>
      <div className="mt-table">
        <div className="mt-table-header">
          <div className="mt-header-cell">Date</div>
          <div className="mt-header-cell">Breakfast</div>
          <div className="mt-header-cell">Lunch</div>
          <div className="mt-header-cell">Dinner</div>
          <div className="mt-header-cell">Total</div>
        </div>
        {history.map((day, index) => (
          <div key={index} className="mt-table-row">
            <div className="mt-row-cell mt-date-cell">{day.date}</div>
            <div className={`mt-row-cell ${day.breakfast ? 'mt-present' : 'mt-absent'}`}>
              {day.breakfast ? '✓' : '✗'}
            </div>
            <div className={`mt-row-cell ${day.lunch ? 'mt-present' : 'mt-absent'}`}>
              {day.lunch ? '✓' : '✗'}
            </div>
            <div className={`mt-row-cell ${day.dinner ? 'mt-present' : 'mt-absent'}`}>
              {day.dinner ? '✓' : '✗'}
            </div>
            <div className="mt-row-cell mt-total-cell">
              {(day.breakfast ? 1 : 0) + (day.lunch ? 1 : 0) + (day.dinner ? 1 : 0)}/3
            </div>
          </div>
        ))}
      </div>
      <div className="mt-summary">
        <div className="mt-summary-card">
          <div className="mt-summary-value">
            {history.filter(day => day.breakfast).length}
          </div>
          <div className="mt-summary-label">Breakfasts</div>
        </div>
        <div className="mt-summary-card">
          <div className="mt-summary-value">
            {history.filter(day => day.lunch).length}
          </div>
          <div className="mt-summary-label">Lunches</div>
        </div>
        <div className="mt-summary-card">
          <div className="mt-summary-value">
            {history.filter(day => day.dinner).length}
          </div>
          <div className="mt-summary-label">Dinners</div>
        </div>
      </div>
    </div>
  );
};

export default MealTracking;