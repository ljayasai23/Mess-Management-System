import React from 'react';
import './UserManagement.css';

const UserManagement = ({ users }) => {
  return (
    <div className="user-management">
      <div className="section-header">
        <h3>User Management</h3>
        <button className="add-user-btn">+ Add User</button>
      </div>
      <div className="users-table">
        <div className="table-header">
          <div>Name</div>
          <div>Email</div>
          <div>Status</div>
          <div>Meals</div>
          <div>Actions</div>
        </div>
        {users.map(user => (
          <div key={user.id} className="table-row">
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>
              <span className={`status-badge ${user.status}`}>
                {user.status}
              </span>
            </div>
            <div>{user.meals}</div>
            <div className="actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;