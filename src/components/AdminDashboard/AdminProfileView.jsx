import React, { useState } from 'react';
import AdminProfilePicture from './AdminProfilePicture';
import AdminProfilePictureImg from '../../assets/images/admin-avatar.png';
import styles from './AdminProfileView.module.css';
import AnimatedButton from '../common/AnimatedButton';

const AdminProfileView = ({ admin, setAdmin }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempAdmin, setTempAdmin] = useState({...admin});

  const handleEditToggle = () => {
    if (isEditing) {
      setAdmin(tempAdmin);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setTempAdmin({
      ...tempAdmin,
      [e.target.name]: e.target.value
    });
  };

  const handlePhotoChange = () => {
    console.log('Photo change initiated');
    // Implement photo change logic here
  };

  return (
    <div className={styles.adminProfileContainer}>
      <div className={styles.profileHeader}>
        <h2>Admin Profile</h2>
      </div>

      <div className={styles.profileContent}>
        <div className={styles.profileLayout}>
          {/* Left Side - Profile Picture */}
          <div className={styles.leftColumn}>
            <AdminProfilePicture 
              imageUrl={AdminProfilePictureImg} 
              onPhotoChange={handlePhotoChange} 
            />
          </div>

          {/* Right Side - Information */}
          <div className={styles.rightColumn}>
            <div className={styles.infoSection}>
              <h3 className={styles.sectionTitle}>Personal Information</h3>
              
              <div className={styles.infoField}>
                <label>Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={tempAdmin.name}
                    onChange={handleChange}
                    className={styles.adminInput}
                  />
                ) : (
                  <p>{admin.name}</p>
                )}
              </div>
              
              <div className={styles.infoField}>
                <label>Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={tempAdmin.email}
                    onChange={handleChange}
                    className={styles.adminInput}
                  />
                ) : (
                  <p>{admin.email}</p>
                )}
              </div>
              
              <div className={styles.buttonGroup}>
                <AnimatedButton 
                  text={isEditing ? "Save Changes " : "Edit Profile "} 
                  className={styles.primaryButton}
                  onClick={handleEditToggle}
                />
                {isEditing && (
                  <AnimatedButton 
                    text="Cancel" 
                    className={styles.secondaryButton}
                    onClick={() => setIsEditing(false)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfileView;