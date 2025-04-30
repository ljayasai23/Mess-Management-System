import React from 'react';
import './UserQuickActions.css';
import AnimatedButton from '../common/AnimatedButton';

const UserQuickActions = ({ complaintsRef }) => {
  const scrollToSection = (sectionId, tabType = null) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector('.user-header')?.offsetHeight || 70;
      window.scrollTo({
        top: section.offsetTop - headerHeight - 20,
        behavior: 'smooth'
      });

      // Switch tab if specified
      if (tabType && complaintsRef?.current) {
        setTimeout(() => {
          complaintsRef.current.setActiveTab(tabType);
        }, 100);
      }
    }
  };

  const actions = [
    { 
      label: 'Meal History', 
      icon: '📅',
      onClick: () => scrollToSection('meal-history-section')
    },
    { 
      label: 'Give Feedback', 
      icon: '💬',
      onClick: () => scrollToSection('feedback-complaints-section')
    },
    { 
      label: 'File Complaint', 
      icon: '⚠️',
      onClick: () => {
        scrollToSection('feedback-complaints-section');
        if (complaintsRef?.current) {
          setTimeout(() => {
            complaintsRef.current.setActiveTab('complaint');
          }, 100);
        }
      }
    },
    { 
      label: 'Report Absence', 
      icon: '🚫',
      onClick: () => {
        scrollToSection('feedback-complaints-section');
        if (complaintsRef?.current) {
          setTimeout(() => {
            complaintsRef.current.setActiveTab('absent');
          }, 100);
        }
      }
    }
  ];

  return (
    <div className="user-quick-actions">
      <h3>Quick Actions</h3>
      <div className="actions-grid">
        {actions.map((action, index) => (
          <AnimatedButton
            key={index}
            className="action-btn"
            onClick={action.onClick}
            aria-label={action.label}
            text={`${action.icon} ${action.label}`}

          >
            <span className="action-icon">{action.icon}</span>
            <span className="action-label">{action.label}</span>
          </AnimatedButton>
        ))}
      </div>
    </div>
  );
};

export default UserQuickActions;