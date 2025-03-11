import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import Registration from "./Registration";
import ReviewDashboard from "./ReviewDashboard"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<ReviewDashboard />} /> 
      </Routes>
    </Router>
  );
};

export default App;
