import React, { useEffect } from 'react';
import './Alert.css';

const Alert = ({ message, type = 'info', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      <button onClick={onClose} className="alert-close">×</button>
    </div>
  );
};

export default Alert; // ✅ Correct default export