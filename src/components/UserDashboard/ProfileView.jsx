import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import ProfilePicture from './ProfilePicture';
import SecuritySettings from './SecuritySettings';
import './ProfileView.css';

const ProfileView = () => {
  const [user, setUser] = useState({
    name: 'User One',
    email: 'user1@example.com',
    phone: '+1 (555) 123-4567',
    mealPlan: 'Premium',
    joinDate: 'January 15, 2023'
  });

  return (
    <div className="profile-view">
      <div className="profile-header">
        <h2>My Profile</h2>
        <div className="profile-status">
          <span className="status-badge active">Active</span>
        </div>
      </div>
      
      <div className="profile-content">
        <div className="profile-main">
          <ProfilePicture user={user} />
          <ProfileForm user={user} setUser={setUser} />
        </div>
        <div className="security-container">
          <SecuritySettings />
        </div>
      </div>
    </div>
  );
};

export default ProfileView;