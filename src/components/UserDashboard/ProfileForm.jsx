import React, { useState } from 'react';
import AnimatedButton from '../common/AnimatedButton';

const ProfileForm = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleSave = () => {
    setIsEditing(false);
    // API call would go here in production
    console.log('Profile updated:', user);
  };

  return (
    <div className="profile-form">
      <h3>Personal Information</h3>
      
      <div className="form-group">
        <label>Full Name</label>
        {isEditing ? (
          <input
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
          />
        ) : (
          <div className="form-value">{user.name}</div>
        )}
      </div>
      
      <div className="form-group">
        <label>Email</label>
        {isEditing ? (
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
          />
        ) : (
          <div className="form-value">{user.email}</div>
        )}
      </div>
      
      <div className="form-actions">
        {isEditing ? (
          <>
            <AnimatedButton 
              text="Save Changes" 
              onClick={handleSave}
              className="primary-btn"
            />
            <br/>
            <AnimatedButton 
              text="Cancel" 
              onClick={() => setIsEditing(false)}
              className="secondary-btn"
            />
          </>
        ) : (
          <AnimatedButton 
            text="Edit Profile" 
            onClick={() => setIsEditing(true)}
            className="primary-btn"
          />
        )}
      </div>
    </div>
  );
};

export default ProfileForm;  // Proper export added