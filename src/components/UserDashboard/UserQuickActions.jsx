import React from 'react';
import  AnimatedButton  from '../common/AnimatedButton';
import './UserQuickActions.css';

const UserQuickActions = () => {
  const actions = [
    { label: 'Request Leave', icon: '🏠' },
    { label: 'Change Plan', icon: '🔄' },
    { label: 'Invite Friend', icon: '👫' },
    { label: 'View History', icon: '📅' }
  ];

  return (
    <div className="user-quick-actions">
      <h3>Quick Actions</h3>
      <div className="actions-grid">
        {actions.map((action, index) => (
          <AnimatedButton 
            key={index}
            text={`${action.icon} ${action.label}`}
            className="action-btn"
          />
        ))}
      </div>
    </div>
  );
};

export default UserQuickActions;