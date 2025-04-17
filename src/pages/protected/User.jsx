import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import UserHeader from '../../components/UserDashboard/UserHeader';
import MealPlanStatus from '../../components/UserDashboard/MealPlanStatus';
import MealTracking from '../../components//UserDashboard/MealTracking';
import TodaysMenu from '../../components/UserDashboard/TodaysMenu';
import Feedback from '../../components/UserDashboard/Feedback';
import AbsentComplaints from '../../components/UserDashboard/AbsentComplaints';
import UserQuickActions from '../../components/UserDashboard/UserQuickActions';
import './User.css';

const User = () => {
  const { darkMode } = useContext(DarkModeContext);
  
  const mealPlan = {
    name: 'Premium Plan',
    remainingDays: 12,
    mealsLeft: 36,
    nextRenewal: '2023-12-01',
    status: 'active'
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
          <UserQuickActions />
        </div>
        
        <div className="user-row">
          <MealTracking history={mealHistory} />
        </div>
        
        <div className="user-row">
          <Feedback />
          <AbsentComplaints />
        </div>
      </div>
    </div>
  );
};

export default User;