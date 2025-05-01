import React from 'react';
import ProfileView from '../../components/UserDashboard/ProfileView';
import UserHeader from '../../components/UserDashboard/UserHeader';
import './Profile.css'; // Assuming you have a CSS file for styling
const Profile = () => {
  return (
    <div className="profile-page">
      <UserHeader />
      <div className="profile-container">
        <ProfileView />
      </div>
    </div>
  );
};

export default Profile;