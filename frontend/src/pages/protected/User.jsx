import React, { useContext, useRef } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import UserHeader from '../../components/UserDashboard/UserHeader';
import MealPlanStatus from '../../components/UserDashboard/MealPlanStatus';
import MealTracking from '../../components/UserDashboard/MealTracking';
import TodaysMenu from '../../components/UserDashboard/TodaysMenu';
import Feedback from '../../components/UserDashboard/Feedback';
import AbsentComplaints from '../../components/UserDashboard/AbsentComplaints';
import UserQuickActions from '../../components/UserDashboard/UserQuickActions';
import SundaySweetPoll from '../../components/UserDashboard/SundaySweetPoll';
import BackToTop from '../../components/common/BackToTop';
import './User.css';

const User = () => {
  const { darkMode } = useContext(DarkModeContext);
  const complaintsRef = useRef(null);

  const mealPlan = {
    name: 'Standard Plan',
    status: 'active',
    remainingDays: 24,
    mealsLeft: 68,
    nextRenewal: 'March 1, 2026',
    pricing: 'Breakfast: ₹60, Lunch: ₹60, Snacks: ₹10, Dinner: ₹60'
  };

  const todayMenu = {
    breakfast: 'Pancakes, Fruits, Juice',
    lunch: 'Rice, Chicken Curry, Salad',
    dinner: 'Pasta, Garlic Bread, Soup',
    special: 'Ice Cream for dessert'
  };

  const mealHistory = [
    { date: '2025-02-01', breakfast: true, lunch: true, dinner: false },
    { date: '2025-01-31', breakfast: true, lunch: true, dinner: true },
    { date: '2025-01-30', breakfast: false, lunch: true, dinner: true },
    { date: '2025-01-29', breakfast: true, lunch: false, dinner: true },
  ];

  return (
    <div className={`user-dashboard ${darkMode ? 'dark-mode' : ''}`}>
      <UserHeader />
      
      <div className="user-content">
        <div className="user-row">
          <MealPlanStatus plan={mealPlan} />
          <TodaysMenu menu={todayMenu} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
            <UserQuickActions complaintsRef={complaintsRef} />
            <SundaySweetPoll />
          </div>
        </div>
        
        <div className="user-row" id="meal-history-section">
          <MealTracking />
        </div>
        
        <div className="user-row combined-section" id="feedback-complaints-section">
          <div className="feedback-container">
            <Feedback />
          </div>
          <div className="complaints-container">
            <AbsentComplaints ref={complaintsRef} />
          </div>
        </div>
      </div>
      
      <BackToTop />
    </div>
  );
};

export default User;