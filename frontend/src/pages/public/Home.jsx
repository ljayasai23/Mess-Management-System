import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedButton  from '../../components/common/AnimatedButton';
import './Home.css';
import heroImage from '../../assets/images/mess-hero.png'; // Example image, replace with actual path;

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <section className="hero animate-on-scroll">
        <div className="hero-content">
          <h1 className="hero-title">Modern Mess Management</h1>
          <p className="hero-subtitle">Streamline your dining experience with our intuitive system</p>
          <div className="hero-buttons">
            <AnimatedButton 
              text="Login" 
              onClick={() => navigate('/login')}
              className="primary-btn"
            />
            <AnimatedButton 
              text="Sign Up" 
              onClick={() => navigate('/signup')}
              className="secondary-btn"
            />
          </div>
        </div>
        <div className="hero-image">
          <img 
            src={heroImage} 
            alt="Mess Management System" 
            className="floating-image"
          />
        </div>
      </section>

      <section className="features">
        <h2 className="section-title animate-on-scroll">Key Features</h2>
        <div className="features-grid">
          {[
            { icon: '🍽️', title: 'Meal Tracking', desc: 'Track your daily meals and nutrition' },
            { icon: '📊', title: 'Real-time Stats', desc: 'Get insights into your dining habits' },
            { icon: '📝', title: 'Menu Planning', desc: 'View and plan weekly menus' },
            { icon: '📱', title: 'Mobile Friendly', desc: 'Access from any device' },
          ].map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card animate-on-scroll delay-${index}`}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta animate-on-scroll">
        <h2>Ready to Transform Your Mess Experience?</h2>
        <AnimatedButton 
          text="Get Started Now" 
          onClick={() => navigate('/signup')}
          className="cta-btn pulse"
        />
      </section>
    </div>
  );
};

export default Home;