import React, { useState } from 'react';
import  AnimatedButton  from '../../components/common/AnimatedButton';
import Alert  from '../../components/common/Alert';
import './Contact.css';
import UserHeader from '../../components/UserDashboard/UserHeader';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      <UserHeader />
      <div className="contact-container animate-on-scroll">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Have questions or feedback? We'd love to hear from you!
            </p>
            <div className="contact-details">
              <p>📧 Email: support@messmanagement.com</p>
              <p>📞 Phone: +1 (123) 456-7890</p>
              <p>🏢 Address: 123 Mess Street, Foodville</p>
            </div>
          </div>
          <div className="contact-form">
            {submitted && (
              <Alert message="Thank you for your message! We'll get back to you soon." type="success" />
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                />
              </div>
              <AnimatedButton 
                text="Send Message" 
                type="submit"
                className="submit-btn"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;