import React, { useState } from 'react';
import { FaSearch, FaFilter, FaCalendarAlt, FaUserCircle, FaInfoCircle, FaTrashAlt, FaDownload } from 'react-icons/fa';
import './AuditLogsPage.css';
import AdminHeader from '../../components/AdminDashboard/AdminHeader';

const AuditLogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAction, setSelectedAction] = useState('all');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [isClearing, setIsClearing] = useState(false);

  // Enhanced audit log data with more entries
  const auditLogs = [
    {
      id: 1,
      timestamp: '2023-06-15 09:30:45',
      user: 'admin@example.com',
      action: 'user_create',
      description: 'Created new user: student123@example.com',
      ipAddress: '192.168.1.100'
    },
    {
      id: 2,
      timestamp: '2023-06-15 11:15:22',
      user: 'manager@example.com',
      action: 'meal_update',
      description: 'Updated lunch menu for 2023-06-16',
      ipAddress: '192.168.1.101'
    },
    {
      id: 3,
      timestamp: '2023-06-14 14:45:10',
      user: 'admin@example.com',
      action: 'settings_update',
      description: 'Changed system timeout to 30 minutes',
      ipAddress: '192.168.1.100'
    },
    {
      id: 4,
      timestamp: '2023-06-14 16:30:05',
      user: 'chef@example.com',
      action: 'inventory_update',
      description: 'Added 20kg rice to inventory',
      ipAddress: '192.168.1.103'
    },
    {
      id: 5,
      timestamp: '2023-06-13 10:20:33',
      user: 'supervisor@example.com',
      action: 'payment_process',
      description: 'Processed monthly payments for 15 students',
      ipAddress: '192.168.1.102'
    },
    {
      id: 6,
      timestamp: '2023-06-13 08:45:29',
      user: 'manager@example.com',
      action: 'inventory_update',
      description: 'Updated grocery inventory levels',
      ipAddress: '192.168.1.101'
    },
    {
      id: 7,
      timestamp: '2023-06-12 13:30:15',
      user: 'admin@example.com',
      action: 'system_backup',
      description: 'Performed weekly database backup',
      ipAddress: '192.168.1.100'
    },
    {
      id: 8,
      timestamp: '2023-06-12 09:15:42',
      user: 'accountant@example.com',
      action: 'billing_update',
      description: 'Updated billing rates for premium plan',
      ipAddress: '192.168.1.104'
    }
  ];

  const actionTypes = [
    { value: 'all', label: 'All Actions' },
    { value: 'user_create', label: 'User Creation' },
    { value: 'user_delete', label: 'User Deletion' },
    { value: 'meal_update', label: 'Meal Updates' },
    { value: 'payment_process', label: 'Payment Processing' },
    { value: 'settings_update', label: 'Settings Changes' },
    { value: 'inventory_update', label: 'Inventory Updates' },
    { value: 'system_backup', label: 'System Backups' },
    { value: 'billing_update', label: 'Billing Updates' }
  ];

  const clearFilters = () => {
    setIsClearing(true);
    setTimeout(() => {
      setSearchTerm('');
      setSelectedAction('all');
      setDateRange({ start: '', end: '' });
      setIsClearing(false);
    }, 500);
  };

  const filteredLogs = auditLogs.filter(log => {
    const matchesSearch = log.user.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         log.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAction = selectedAction === 'all' || log.action === selectedAction;
    const matchesDate = (!dateRange.start || log.timestamp >= dateRange.start) && 
                       (!dateRange.end || log.timestamp <= dateRange.end + ' 23:59:59');
    return matchesSearch && matchesAction && matchesDate;
  });

  return (
    <div className="audit-logs-container">
      <AdminHeader />
      <div className="audit-logs-header">
        <h1>Mess Management</h1>
        <p className="audit-logs-subtitle">Track all system activities and changes</p>
      </div>

      <div className="audit-logs-controls">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search logs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <br/><br/>
        
        <div className="filter-group">
          <label><FaFilter /> Action Type:</label>
          <select 
            value={selectedAction}
            onChange={(e) => setSelectedAction(e.target.value)}
          >
            {actionTypes.map(action => (
              <option key={action.value} value={action.value}>
                {action.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label><FaCalendarAlt /> Date Range:</label>
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
          />
          <span>to</span>
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
          />
        </div>

        <button 
          className={`clear-filters-btn ${isClearing ? 'clearing' : ''}`}
          onClick={clearFilters}
          disabled={isClearing}
        >
          {isClearing ? 'Clearing...' : 'Clear Filters'}
        </button>
      </div>

      <div className="audit-logs-actions">
        <button className="export-btn">
          <FaDownload /> Export Logs
        </button>
        <button className="purge-btn">
          <FaTrashAlt /> Purge Old Logs
        </button>
      </div>

      <div className="audit-logs-table">
        <div className="table-header">
          <div className="header-cell">Timestamp</div>
          <div className="header-cell">User</div>
          <div className="header-cell">Action</div>
          <div className="header-cell">Description</div>
          <div className="header-cell">IP Address</div>
          <div className="header-cell">Details</div>
        </div>

        <div className="table-body">
          {filteredLogs.length > 0 ? (
            filteredLogs.map(log => (
              <div key={log.id} className="log-row">
                <div className="cell timestamp">{log.timestamp}</div>
                <div className="cell user">
                  <FaUserCircle className="user-icon" />
                  {log.user}
                </div>
                <div className="cell action">
                  <span className={`action-badge ${log.action}`}>
                    {actionTypes.find(a => a.value === log.action)?.label || log.action}
                  </span>
                </div>
                <div className="cell description">{log.description}</div>
                <div className="cell ip">{log.ipAddress}</div>
                <div className="cell details">
                  <button className="details-btn">
                    <FaInfoCircle /> Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              No audit logs found matching your criteria
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuditLogs;