import React, { useRef, useState } from 'react';
import styles from './AdminProfilePicture.module.css';
import defaultAdminAvatar from '../../assets/images/admin-avatar.png'; // Default avatar import

const AdminProfilePicture = ({ onPhotoUpload }) => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(defaultAdminAvatar);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.match('image.*')) {
      alert('Please select an image file (JPEG, PNG)');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size too large (max 5MB)');
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = (event) => {
      setProfileImage(event.target.result);
      setUploadedFile(file);
      if (onPhotoUpload) {
        onPhotoUpload(file); // Pass the file to parent component
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setProfileImage(defaultAdminAvatar);
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    if (onPhotoUpload) {
      onPhotoUpload(null); // Notify parent that photo was removed
    }
  };

  return (
    <div className={styles.profilePictureContainer}>
      <div className={styles.profilePictureWrapper}>
        <img 
          src={profileImage} 
          alt="Admin Profile" 
          className={styles.profilePicture}
          onError={(e) => {
            e.target.src = defaultAdminAvatar; // Fallback if image fails to load
          }}
        />
      </div>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className={styles.fileInput}
      />
      
      <div className={styles.buttonGroup}>
        <button 
          className={styles.changePhotoButton}
          onClick={handleButtonClick}
          type="button"
        >
          <b>{uploadedFile ? 'Change Photo' : 'Change Photo'}</b>
        </button>
        
        {uploadedFile && (
          <button
            className={styles.removePhotoButton}
            onClick={handleRemovePhoto}
            type="button"
          >
            <b>Remove</b>
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminProfilePicture;