import React from 'react';
import aboutImage from '../../assets/images/meal-icon.png'; // Adjusted to your file structure
import './About.css';
import UserHeader from '../../components/UserDashboard/UserHeader';


const About = () => {
  return (
    <div className="about-page">
      <UserHeader />
      <div className="about-container animate-on-scroll">
        <h1>About Our Mess Management System</h1>
        <div className="about-content">
          <div className="about-image">
            <img 
              src={aboutImage} 
              alt="Mess Management System in action" 
              className="about-image-content"
            />
          </div>
          <div className="about-text">
            <p>
              Our Mess Management System is designed to revolutionize the way dining
              facilities operate in hostels, colleges, and other institutions.
            </p>
            <p>
              With features like real-time meal tracking, automated billing, and
              comprehensive reporting, we aim to make mess management effortless
              for both administrators and users.
            </p>
            <h3>Our Mission</h3>
            <p>
              To provide a seamless, transparent, and efficient dining experience
              through technology while maintaining the highest standards of food
              quality and service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;