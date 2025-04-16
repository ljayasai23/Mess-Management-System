import React, { useState } from 'react';
import AnimatedButton  from '../common/AnimatedButton';
import  Alert  from '../common/Alert';
import './AbsentComplaints.css';

const AbsentComplaints = () => {
  const [type, setType] = useState('absent');
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
        <button 
          className={`tab ${type === 'absent' ? 'active' : ''}`}
          onClick={() => setType('absent')}
        >
          Report Absence
        </button>
        <button 
          className={`tab ${type === 'complaint' ? 'active' : ''}`}
          onClick={() => setType('complaint')}
        >
          File Complaint
        </button>
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
            required
          />
        </div>
        <AnimatedButton 
          text={type === 'absent' ? 'Submit Absence' : 'Submit Complaint'} 
          type="submit"
          className="submit-btn"
        />
      </form>
    </div>
  );
};

export default AbsentComplaints;