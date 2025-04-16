import React from 'react';
import UserHeader from '../../components/UserDashboard/UserHeader';
import MealPlanStatus from '../../components/UserDashboard/MealPlanStatus';
import MealTracking from '../../components/UserDashboard/MealTracking';
import TodaysMenu from '../../components/UserDashboard/TodaysMenu';
import Feedback from '../../components/UserDashboard/Feedback';
import AbsentComplaints from '../../components/UserDashboard/AbsentComplaints';
import UserQuickActions from '../../components/UserDashboard/UserQuickActions';

import './User.css';

const User = () => {
  // Sample data - replace with your actual data sources
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
    <div className="user-dashboard">
      {/* Updated UserHeader with navigation */}
      <UserHeader />
      
      {/* Main dashboard content */}
      <div className="user-content">
        {/* First row with key information */}
        
        <div className="user-row">
          <MealPlanStatus plan={mealPlan} />
          <TodaysMenu menu={todayMenu} />
          <UserQuickActions />
        </div>
        
        {/* Second row with meal tracking */}
        <div className="user-row">
          <MealTracking history={mealHistory} />
        </div>
        
        {/* Third row with feedback and complaints */}
        <div className="user-row">
          <Feedback />
          <AbsentComplaints />
        </div>
      </div>
    </div>
  );
};

export default User;