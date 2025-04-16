import React from 'react';
import AnimatedButton from '../common/AnimatedButton'; // Changed to default import
import './QuickActions.css';

const QuickActions = () => {
  const actions = [
    { label: 'Add New User', icon: '👥' },
    { label: 'Create Meal Plan', icon: '📝' },
    { label: 'Send Announcement', icon: '📢' },
    { label: 'Generate Report', icon: '📊' }
  ];

  return (
    <div className="quick-actions">
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

export default QuickActions;