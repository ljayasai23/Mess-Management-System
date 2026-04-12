import React, { useState } from 'react';
import { sweetPollData } from '../../data/staticData';

const SundaySweetPoll = () => {
  const [voted, setVoted] = useState(false);
  const totalVotes = sweetPollData.reduce((acc, curr) => acc + curr.votes, 0);

  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '15px', background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <div className="card-header">
        <h3 className="card-title" style={{color: '#333'}}>Sunday Special Sweet Poll 🍨</h3>
        <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '5px' }}>Vote for this weekend's special dessert!</p>
      </div>

      <div className="poll-options" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
        {sweetPollData.map((item, index) => {
          const percent = Math.round((item.votes / totalVotes) * 100);
          return (
            <div key={index} className="poll-option" style={{ position: 'relative', cursor: voted ? 'default' : 'pointer', color: '#333' }} onClick={() => setVoted(true)}>
              {/* Background fill */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, height: '100%',
                width: voted ? `${percent}%` : '0%',
                background: '#ffe0b2',
                borderRadius: '8px',
                transition: 'width 1s ease-out'
              }}></div>
              
              {/* Content */}
              <div style={{ position: 'relative', padding: '12px 15px', display: 'flex', justifyContent: 'space-between', border: '1px solid #eaeaea', borderRadius: '8px' }}>
                <span style={{ fontWeight: '500' }}>{item.name}</span>
                {voted && <span style={{ color: '#e65100', fontWeight: 'bold' }}>{percent}%</span>}
              </div>
            </div>
          );
        })}
      </div>
      
      {voted && <p style={{ textAlign: 'center', color: '#4caf50', marginTop: '10px', fontSize: '0.9rem' }}>Thanks for voting! Results announced Saturday.</p>}
    </div>
  );
};

export default SundaySweetPoll;
