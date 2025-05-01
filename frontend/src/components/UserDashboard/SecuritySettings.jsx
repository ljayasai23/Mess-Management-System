import React, { useState } from 'react';
import AnimatedButton from '../common/AnimatedButton';
import Alert from '../common/Alert';
import './SecuritySettings.css';

const SecuritySettings = () => {
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
    // Reset form
    setPasswords({
      current: '',
      new: '',
      confirm: ''
    });
  };

  return (
    <div className="security-settings-container">
      <h2 className="settings-title">Security Settings</h2>
      
      {message && (
        <Alert 
          message={message.text} 
          type={message.type} 
          onClose={() => setMessage(null)}
        />
      )}
      
      <form onSubmit={handleSubmit} className="security-form">
        <div className="form-group">
          <label htmlFor="current-password">Current Password</label>
          <input
            id="current-password"
            type="password"
            name="current"
            value={passwords.current}
            onChange={handleChange}
            placeholder="Enter your current password"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="new-password">New Password</label>
          <input
            id="new-password"
            type="password"
            name="new"
            value={passwords.new}
            onChange={handleChange}
            placeholder="Create a new password (min 8 characters)"
            required
            minLength="8"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm New Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm"
            value={passwords.confirm}
            onChange={handleChange}
            placeholder="Confirm your new password"
            required
          />
        </div>
        
        <div className="form-actions">
          <AnimatedButton 
            type="submit"
            text="Update Password" 
            className="primary-btn"
          />
        </div>
      </form>
    </div>
  );
};

export default SecuritySettings;