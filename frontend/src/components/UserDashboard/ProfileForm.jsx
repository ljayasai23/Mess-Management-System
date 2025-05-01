import React, { useState } from 'react';
import AnimatedButton from '../common/AnimatedButton';
import './ProfileForm.css';

const UserProfileForm = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleSave = () => {
    setIsEditing(false);
    // API call would go here
    console.log('User profile updated:', user);
  };

  return (
    <div className="user-profile-form">
      <h3 className="user-form-title">Personal Information</h3>
      
      <div className="user-form-group">
        <label className="user-form-label">Full Name</label>
        {isEditing ? (
          <input
            className="user-form-input"
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
          />
        ) : (
          <div className="user-form-value">{user.name}</div>
        )}
      </div>
      
      <div className="user-form-group">
        <label className="user-form-label">Email</label>
        {isEditing ? (
          <input
            className="user-form-input"
            type="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
          />
        ) : (
          <div className="user-form-value">{user.email}</div>
        )}
      </div>
      
      <div className="user-form-actions">
        {isEditing ? (
          <>
            <AnimatedButton 
              text="Save Changes" 
              onClick={handleSave}
              className="user-primary-btn"
            />
            <AnimatedButton 
              text="Cancel" 
              onClick={() => setIsEditing(false)}
              className="user-secondary-btn"
            />
          </>
        ) : (
          <AnimatedButton 
            text="Edit Profile" 
            onClick={() => setIsEditing(true)}
            className="user-primary-btn"
          />
        )}
      </div>
    </div>
  );
};

export default UserProfileForm;