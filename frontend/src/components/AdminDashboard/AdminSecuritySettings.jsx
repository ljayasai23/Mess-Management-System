import React, { useState } from 'react';
import AdminAnimatedButton from '../common/AnimatedButton';
import AdminAlert from '../common/Alert';
import './AdminSecuritySettings.css';

const AdminSecuritySettings = () => {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      setMessage({ text: "Passwords don't match", type: 'error' });
      return;
    }
    if (passwords.new.length < 8) {
      setMessage({ text: "Password must be at least 8 characters", type: 'error' });
      return;
    }
    setMessage({ text: "Password updated successfully", type: 'success' });
    setPasswords({
      current: '',
      new: '',
      confirm: ''
    });
  };

  return (
    <div className="admin-security-container">
      <h2 className="admin-settings-title">Admin Security Settings</h2>
      
      {message && (
        <AdminAlert 
          message={message.text} 
          type={message.type} 
          onClose={() => setMessage(null)}
        />
      )}
      
      <form onSubmit={handleSubmit} className="admin-security-form">
        <div className="admin-form-group">
          <label htmlFor="admin-current-password">Current Password</label>
          <input
            id="admin-current-password"
            type="password"
            name="current"
            value={passwords.current}
            onChange={handleChange}
            placeholder="Enter your current password"
            required
          />
        </div>
        
        <div className="admin-form-group">
          <label htmlFor="admin-new-password">New Password</label>
          <input
            id="admin-new-password"
            type="password"
            name="new"
            value={passwords.new}
            onChange={handleChange}
            placeholder="Create a new password (min 8 characters)"
            required
            minLength="8"
          />
        </div>
        
        <div className="admin-form-group">
          <label htmlFor="admin-confirm-password">Confirm New Password</label>
          <input
            id="admin-confirm-password"
            type="password"
            name="confirm"
            value={passwords.confirm}
            onChange={handleChange}
            placeholder="Confirm your new password"
            required
          />
        </div>
        
        <div className="admin-form-actions">
          <AdminAnimatedButton 
            type="submit"
            text="Update Password" 
            className="admin-primary-btn"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminSecuritySettings;