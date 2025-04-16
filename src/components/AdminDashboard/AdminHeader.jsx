import React from 'react';
import './AdminHeader.css';

const AdminHeader = () => {
  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <h1>Mess Management Admin</h1>
      </div>
      <div className="admin-header-right">
        <div className="admin-profile">
          <span className="admin-name">Admin User</span>
          <div className="admin-avatar">A</div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;