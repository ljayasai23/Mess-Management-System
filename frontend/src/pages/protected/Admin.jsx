import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import AdminHeader from '../../components/AdminDashboard/AdminHeader';
import StatisticsOverview from '../../components/AdminDashboard/StatisticsOverview';
import UserManagement from '../../components/AdminDashboard/UserManagement';
import MealPlanManagement from '../../components/AdminDashboard/MealPlanManagement';
import InteractiveCharts from '../../components/AdminDashboard/InteractiveCharts';
import QuickActions from '../../components/AdminDashboard/QuickActions';
import './Admin.css';
import BackToTop from '../../components/common/BackToTop';

const Admin = () => {
  const { darkMode } = useContext(DarkModeContext);

  const statsData = {
    totalUsers: 124,
    activeUsers: 98,
    mealsServed: 2453,
    complaints: 12,
  };

  const usersData = [
    { id: 1, name: 'User One', email: 'user1@example.com', status: 'active', meals: 28 },
    { id: 2, name: 'User Two', email: 'user2@example.com', status: 'inactive', meals: 15 },
    { id: 3, name: 'User Three', email: 'user3@example.com', status: 'active', meals: 42 },
  ];

  const mealPlans = [
    { id: 1, name: 'Standard Plan', description: '3 meals per day', price: '$300/month' },
    { id: 2, name: 'Premium Plan', description: '3 meals + snacks', price: '$450/month' },
  ];

  return (
     <div className={`admin-dashboard ${darkMode ? 'dark-mode' : ''}`}>
      <AdminHeader />
      <div className="admin-content">
        <div className="admin-row">
          <StatisticsOverview data={statsData} />
          <QuickActions />
        </div>
        <div id="user-management-section" className="admin-row">
          <UserManagement users={usersData} />
          <MealPlanManagement plans={mealPlans} />
        </div>
        <div id="consumption-section" className="admin-row-full">
          <InteractiveCharts />
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default Admin;