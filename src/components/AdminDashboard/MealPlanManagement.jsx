import React, { useState } from 'react';
import AnimatedButton from '../common/AnimatedButton'; // Changed from named import to default import
import './MealPlanManagement.css';

// ... rest of your MealPlanManagement.jsx code remains exactly the same ...

const MealPlanManagement = ({ plans }) => {
  const [showModal, setShowModal] = useState(false);
  const [newPlan, setNewPlan] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlan(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to backend
    setShowModal(false);
    setNewPlan({ name: '', description: '', price: '' });
  };

  return (
    <div className="meal-plan-management">
      <div className="section-header">
        <h3>Meal Plan Management</h3>
        <AnimatedButton 
          text="+ Add Plan" 
          onClick={() => setShowModal(true)}
          className="add-plan-btn"
        />
      </div>
      
      <div className="plans-grid">
        {plans.map(plan => (
          <div key={plan.id} className="plan-card">
            <h4>{plan.name}</h4>
            <p>{plan.description}</p>
            <div className="plan-price">{plan.price}</div>
            <div className="plan-actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Meal Plan</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Plan Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={newPlan.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea 
                  name="description"
                  value={newPlan.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input 
                  type="text" 
                  name="price"
                  value={newPlan.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="modal-actions">
                <AnimatedButton 
                  text="Cancel" 
                  onClick={() => setShowModal(false)}
                  className="secondary-btn"
                />
                <AnimatedButton 
                  text="Save Plan" 
                  type="submit"
                  className="primary-btn"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealPlanManagement;