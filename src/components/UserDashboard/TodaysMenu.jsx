import React from 'react';
import './TodaysMenu.css';

const TodaysMenu = ({ menu }) => {
  return (
    <div className="todays-menu">
      <h3>Today's Menu</h3>
      <div className="menu-items">
        <div className="menu-item breakfast">
          <div className="meal-icon">🌅</div>
          <div className="meal-details">
            <h4>Breakfast</h4>
            <p>{menu.breakfast}</p>
          </div>
        </div>
        <div className="menu-item lunch">
          <div className="meal-icon">☀️</div>
          <div className="meal-details">
            <h4>Lunch</h4>
            <p>{menu.lunch}</p>
          </div>
        </div>
        <div className="menu-item dinner">
          <div className="meal-icon">🌙</div>
          <div className="meal-details">
            <h4>Dinner</h4>
            <p>{menu.dinner}</p>
          </div>
        </div>
        {menu.special && (
          <div className="menu-special">
            <div className="special-icon">🌟</div>
            <p>{menu.special}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodaysMenu;