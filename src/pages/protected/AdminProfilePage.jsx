import React, { useState } from 'react';
import AdminHeader from '../../components/AdminDashboard/AdminHeader';
import AdminSecuritySettings from '../../components/AdminDashboard/AdminSecuritySettings';
import AdminProfileView from '../../components/AdminDashboard/AdminProfileView'; // Changed to local import
import './AdminProfilePage.css';

const AdminProfilePage = () => {
  const [admin, setAdmin] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    phone: '+1 (555) 987-6543',
    role: 'Super Admin',
    joinDate: 'January 1, 2023',
    permissions: 'Full Access'
  });

  return (
    <div className="admin-profile-page">
      <AdminHeader />
      <main className="admin-profile-container">
        <AdminProfileView admin={admin} setAdmin={setAdmin} />
        <div className="admin-security-section">
          <AdminSecuritySettings />
        </div>
      </main>
    </div>
  );
};

export default AdminProfilePage;