import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedButton  from '../../components/common/AnimatedButton';
import './Home.css';
import heroImage from '../../assets/images/mess-hero.png'; 

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

  const features = [
    { 
      icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="2em" width="2em"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>, 
      title: 'Meal Tracking', 
      desc: 'Track your daily meals and nutrition with predictive insights.' 
    },
    { 
      icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="2em" width="2em"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>, 
      title: 'Real-time Stats', 
      desc: 'Get beautiful analytical insights into your dining habits.' 
    },
    { 
      icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="2em" width="2em"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>, 
      title: 'Menu Planning', 
      desc: 'View and plan weekly menus with dynamic schedules.' 
    },
    { 
      icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="2em" width="2em"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>, 
      title: 'Mobile Friendly', 
      desc: 'Access flawlessly from any device or screen.' 
    },
  ];

  return (
    <div className="home-page">
      <section className="hero animate-on-scroll">
        <div className="hero-content">
          <div className="badge-glow">Introducing 2.0</div>
          <h1 className="hero-title">Modern <span className="text-gradient">Mess Management</span></h1>
          <p className="hero-subtitle">Streamline your dining experience with our intuitive, elegantly designed management system.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/login')}>Login Dashboard</button>
            <button className="btn btn-glass" onClick={() => navigate('/signup')}>Create Account</button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="glow-orb"></div>
          <img 
            src={heroImage} 
            alt="Mess Management System" 
            className="floating-image hero-image"
          />
        </div>
      </section>

      <section className="features">
        <h2 className="section-title animate-on-scroll">Our <span className="text-gradient">Core Features</span></h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className={`glass-card feature-card animate-on-scroll delay-${index}`}>
              <div className="feature-icon-wrapper">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta animate-on-scroll">
        <div className="glass-card cta-card">
          <h2>Ready to Transform Your Mess Experience?</h2>
          <p>Join thousands of users enjoying a seamless dining management ecosystem.</p>
          <button className="btn btn-primary pulse" onClick={() => navigate('/signup')}>Get Started Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;