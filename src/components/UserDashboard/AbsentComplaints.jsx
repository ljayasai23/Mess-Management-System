import React, { useState, forwardRef, useImperativeHandle } from 'react';
import AnimatedButton from '../common/AnimatedButton';
import Alert from '../common/Alert';
import './AbsentComplaints.css';

const AbsentComplaints = forwardRef((props, ref) => {
  const [type, setType] = useState(props.defaultType || 'absent');
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Expose functions to parent via ref
  useImperativeHandle(ref, () => ({
    setActiveTab: (tabType) => setType(tabType)
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && reason) {
      setSubmitted(true);
      setDate('');
      setReason('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="absent-complaints">
      <h3>Report Absence/Complaint</h3>
      {submitted && (
        <Alert message="Your submission has been recorded!" type="success" />
      )}
      
      <div className="tabs">
        <div 
          className={`tab ${type === 'absent' ? 'active' : ''}`}
          onClick={() => setType('absent')}
        >
          Absence
        </div>
        <div 
          className={`tab ${type === 'complaint' ? 'active' : ''}`}
          onClick={() => setType('complaint')}
        >
          Complaint
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>
            {type === 'absent' ? 'Reason for Absence' : 'Complaint Details'}
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Please provide details..."
            required
          />
        </div>
        
        <div className="button-container">
          <AnimatedButton 
            text={type === 'absent' ? 'Submit Absence' : 'Submit Complaint'} 
            type="submit"
          />
        </div>
      </form>
    </div>
  );
});

export default AbsentComplaints;