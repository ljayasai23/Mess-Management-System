import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/public/Home';
import About from './pages/protected/About';
import Contact from './pages/protected/Contact';
import Login from './pages/public/Login';
import Signup from './pages/public/SignUp';
import Admin from './pages/protected/Admin';
import User from './pages/protected/User';
import Profile from './pages/protected/Profile';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';
function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Regular Routes (no protection) */}
          <Route path="/user" element={<User />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />

          {/* 404 Page */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;