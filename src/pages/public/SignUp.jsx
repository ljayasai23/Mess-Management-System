import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  AnimatedButton  from '../../components/common/AnimatedButton';
import  Alert  from '../../components/common/Alert';
import './Signup.css';
import loginImage from '../../assets/images/mess-login.png'; // Adjusted to your file structure


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="signup-page">
      <div className="signup-container animate-on-scroll">
        <div className="signup-header">
          <h2>Create Your Account</h2>
          <p>Join our mess management system today</p>
        </div>
        
        {error && <Alert message={error} type="error" onClose={() => setError('')} />}
        
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-actions">
            <AnimatedButton 
              text={isLoading ? 'Creating account...' : 'Sign Up'} 
              type="submit"
              disabled={isLoading}
              className="signup-btn"
            />
          </div>
        </form>
        
        <div className="signup-footer">
          <p>Already have an account? <span onClick={() => navigate('/login')}>Login</span></p>
        </div>
      </div>
      
      <div className="signup-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
        <div className="signup-image-placeholder"><img 
                  src={loginImage} 
                  alt="Mess Management Illustration" 
                  className="login-image"
                /></div>

      </div>
    </div>
  );
};

export default Signup;