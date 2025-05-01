import React from 'react';
import './UserManagement.css'; // Import the scoped CSS
import AnimatedButton from '../common/AnimatedButton'
const UserManagement = ({ users = [] }) => {
  return (
    <div className="user-management-container">
      <div className="um-section-header">
        <h3>User Management</h3>
        <AnimatedButton
          text="+ Add User" 
          type="add-user"
          className="um-add-user-btn"
        />
          
      </div>
      <div className="um-table-container">
        <div className="um-table-header">
          <div className="um-header-cell">NAME</div>
          <div className="um-header-cell">EMAIL</div>
          <div className="um-header-cell">STATUS</div>
          <div className="um-header-cell">MEALS</div>
          <div className="um-header-cell">ACTIONS</div>
        </div>
        <div className="um-table-body">
          {users.map(user => (
            <div key={user.id} className="um-table-row">
              <div className="um-table-cell" data-label="Name">{user.name}</div>
              <div className="um-table-cell" data-label="Email">{user.email}</div>
              <div className="um-table-cell" data-label="Status">
                <span className={`um-status-badge ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </div>
              <div className="um-table-cell" data-label="Meals">{user.meals}</div>
              <div className="um-table-cell um-actions" data-label="Actions">
                <button className="um-edit-btn">Edit</button>
                <button className="um-delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;