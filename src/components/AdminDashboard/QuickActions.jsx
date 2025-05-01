import React from 'react';
import styles from './QuickActions.module.css';
import AnimatedButton from '../common/AnimatedButton';

const AdminQuickActions = ({ complaintsRef }) => {
  const scrollToSection = (sectionId, tabType = null) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector('.admin-header')?.offsetHeight || 70;
      window.scrollTo({
        top: section.offsetTop - headerHeight - 20,
        behavior: 'smooth'
      });

      if (tabType && complaintsRef?.current) {
        setTimeout(() => {
          complaintsRef.current.setActiveTab(tabType);
        }, 100);
      }
    }
  };

  const actions = [
    { 
      label: 'User Management', 
      icon: '👥',
      onClick: () => scrollToSection('user-management-section')
    },
    { 
      label: 'Meal Plans', 
      icon: '🍽️',
      onClick: () => scrollToSection('user-management-section')
    },
    { 
      label: 'Consumption', 
      icon: '📊',
      onClick: () => scrollToSection('consumption-section')
    },
    { 
      label: 'Meal Distribution', 
      icon: '📈',
      onClick: () => scrollToSection('consumption-section'),
      className: styles.distributionBtn // Special styling if needed
    }
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Admin Quick Actions</h3>
      <div className={styles.actionsGrid}>
        {actions.map((action, index) => (
          <AnimatedButton
            key={index}
            className={styles.actionBtn}
            onClick={action.onClick}
            aria-label={action.label}
            text={`${action.icon} ${action.label}`}
          >
            <span className={styles.actionIcon}>{action.icon}</span>
            <span className={styles.actionLabel}>{action.label}</span>
          </AnimatedButton>
        ))}
      </div>
    </div>
  );
};

export default AdminQuickActions;