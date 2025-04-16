import React, { useEffect, useRef } from 'react';
import './InteractiveCharts.css';

const InteractiveCharts = () => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    // Animate bar chart
    if (barChartRef.current) {
      const bars = barChartRef.current.querySelectorAll('.bar');
      bars.forEach((bar, index) => {
        setTimeout(() => {
          const height = bar.getAttribute('data-value');
          bar.style.height = `${height}%`;
          bar.style.opacity = 1;
        }, index * 200);
      });
    }

    // Animate pie chart
    if (pieChartRef.current) {
      const segments = pieChartRef.current.querySelectorAll('.segment');
      segments.forEach((segment, index) => {
        setTimeout(() => {
          segment.style.opacity = 1;
          segment.style.transform = 'scale(1)';
        }, index * 200 + 1000);
      });
    }
  }, []);

  return (
    <div className="interactive-charts">
      <h3>Weekly Analytics</h3>
      <div className="charts-container">
        <div className="chart-wrapper">
          <h4>Meal Consumption</h4>
          <div className="bar-chart" ref={barChartRef}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={day} className="bar-container">
                <div 
                  className="bar" 
                  data-value={Math.floor(Math.random() * 70) + 30}
                  style={{ height: '0%', opacity: 0 }}
                ></div>
                <span className="bar-label">{day}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="chart-wrapper">
          <h4>Meal Type Distribution</h4>
          <div className="pie-chart" ref={pieChartRef}>
            <div 
              className="segment breakfast" 
              style={{ opacity: 0, transform: 'scale(0.5)' }}
            ></div>
            <div 
              className="segment lunch" 
              style={{ opacity: 0, transform: 'scale(0.5)' }}
            ></div>
            <div 
              className="segment dinner" 
              style={{ opacity: 0, transform: 'scale(0.5)' }}
            ></div>
            <div className="pie-chart-center"></div>
          </div>
          <div className="pie-legend">
            <div><span className="legend-color breakfast"></span> Breakfast</div>
            <div><span className="legend-color lunch"></span> Lunch</div>
            <div><span className="legend-color dinner"></span> Dinner</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCharts;