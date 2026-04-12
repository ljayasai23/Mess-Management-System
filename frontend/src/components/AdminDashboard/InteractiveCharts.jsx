import React from 'react';
import { AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { sweetPollData } from '../../data/staticData';
import './InteractiveCharts.css';

const InteractiveCharts = () => {
  // Mock Inventory Area Data
  const inventoryData = [
    { name: 'Mon', Rice: 400, Dal: 240, Veggies: 240 },
    { name: 'Tue', Rice: 300, Dal: 139, Veggies: 221 },
    { name: 'Wed', Rice: 200, Dal: 980, Veggies: 229 },
    { name: 'Thu', Rice: 278, Dal: 390, Veggies: 200 },
    { name: 'Fri', Rice: 189, Dal: 480, Veggies: 218 },
    { name: 'Sat', Rice: 239, Dal: 380, Veggies: 250 },
    { name: 'Sun', Rice: 349, Dal: 430, Veggies: 210 },
  ];

  const COLORS = ['#f85741', '#4caf50', '#ffc844', '#ff9a44'];

  return (
    <div className="card" style={{ width: '100%', padding: '20px', background: 'white', border: '1px solid #eaeaea', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <h3 style={{ marginBottom: '30px', color: '#333' }}>Global Mess Analytics</h3>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        {/* Area Chart for Inventory */}
        <div style={{ flex: '1 1 500px', height: '350px' }}>
          <h4 style={{ marginBottom: '15px', color: '#555' }}>Weekly Inventory Consumption (Kg)</h4>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={inventoryData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f85741" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f85741" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorDal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4caf50" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#4caf50" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#999" />
              <YAxis stroke="#999" />
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '8px', color: '#333' }}
                itemStyle={{ color: '#333' }}
              />
              <Legend />
              <Area type="monotone" dataKey="Rice" stroke="#f85741" fillOpacity={1} fill="url(#colorRice)" />
              <Area type="monotone" dataKey="Dal" stroke="#4caf50" fillOpacity={1} fill="url(#colorDal)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart for Poll */}
        <div style={{ flex: '1 1 300px', height: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h4 style={{ marginBottom: '15px', color: '#555' }}>Sweet Poll Breakdown</h4>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sweetPollData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="votes"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {sweetPollData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '8px', color: '#333' }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCharts;