import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedButton from '../../components/common/AnimatedButton';
import Alert from '../../components/common/Alert';
import loginImage from '../../assets/images/mess-login.png';
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ 
    username: '', 
    password: '' 
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Define valid credentials
  const VALID_CREDENTIALS = {
    admin: {
      password: 'pass123',
      role: 'admin'
    },
    user1: {
      password: 'pass1',
      role: 'user'
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simple validation
    if (!credentials.username || !credentials.password) {
      setError('Please enter both username and password');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      const user = VALID_CREDENTIALS[credentials.username];
      
      if (user && user.password === credentials.password) {
        // Successful login
        setError('Login successful! Redirecting...');
        
        // Navigate based on role
        if (user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/user');
        }
      } else {
        setError('Invalid username or password');
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-container animate-on-scroll">
        <div className="login-header">
          <h2>Welcome Back!</h2>
          <p>Login to your mess management account</p>
          
        </div>
        
        {error && <Alert message={error} type={error.includes('success') ? 'success' : 'error'} onClose={() => setError('')} />}
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              required
            />
          </div>
          
          <div className="form-actions">
            <AnimatedButton 
              text={isLoading ? 'Logging in...' : 'Login'} 
              type="submit"
              disabled={isLoading}
              className="login-btn"
            />
          </div>
        </form>
        
        <div className="login-footer">
          <p>Don't have an account? <span>Sign up</span></p>
        </div>
      </div>
      
      <div className="login-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
        <img 
          src={loginImage} 
          alt="Mess Management Illustration" 
          className="login-image"
        />
      </div>
    </div>
  );
};

export default Login;