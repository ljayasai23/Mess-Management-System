import React, { useState } from 'react';
import './ProfilePicture.css';

const ProfilePicture = ({ user }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="profile-picture">
      <div className="avatar-container">
        {image ? (
          <img src={image} alt="Profile" className="avatar-image" />
        ) : (
          <div className="avatar-placeholder">
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <div className="picture-actions">
        <label className="change-photo-btn">
          Change Photo
          <input 
            type="file" 
            accept="image/*"
            onChange={handleImageChange}
            className="file-input"
          />
        </label>
        {image && (
          <button 
            className="remove-photo-btn"
            onClick={() => setImage(null)}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePicture;