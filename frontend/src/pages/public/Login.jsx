import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!credentials.username || !credentials.password) {
      setError('Please enter both email and password');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: credentials.username, password: credentials.password })
      });

      const data = await response.json();

      if (data.success) {
        setError('Login successful! Redirecting...');
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('role', data.role);
        
        setTimeout(() => {
          if (data.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/user');
          }
        }, 1000);
      } else {
        setError(data.error || 'Invalid username or password');
        setIsLoading(false);
      }
    } catch (err) {
      setError('Server error, please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h2>Welcome Back</h2>
            <p>Login to your mess management dashboard</p>
          </div>
          
          {error && <Alert message={error} type={error.includes('success') ? 'success' : 'error'} onClose={() => setError('')} />}
          
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                required
              />
            </div>
            
            <div className="form-actions">
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary login-btn"
              >
                {isLoading ? 'Logging in...' : 'Sign In'}
              </button>
            </div>
          </form>
          
          <div className="login-footer">
            <p>Don't have an account? <span onClick={() => navigate('/signup')}>Create one</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;