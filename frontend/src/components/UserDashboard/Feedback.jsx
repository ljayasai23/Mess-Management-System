import React, { useState } from 'react';
import  AnimatedButton  from '../common/AnimatedButton';
import  Alert  from '../common/Alert';
import './Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback && rating > 0) {
      setSubmitted(true);
      setFeedback('');
      setRating(0);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="feedback">
      <h3>Provide Feedback</h3>
      {submitted && (
        <Alert message="Thank you for your feedback!" type="success" />
      )}
      <form onSubmit={handleSubmit}>
        <div className="rating-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? 'filled' : ''}`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        <div className="form-group">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your thoughts about today's meals..."
            required
          />
        </div>
        <AnimatedButton 
          text="Submit Feedback" 
          type="submit"
          className="submit-btn"
        />
      </form>
    </div>
  );
};

export default Feedback;