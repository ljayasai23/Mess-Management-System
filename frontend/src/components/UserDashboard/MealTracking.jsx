import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { studentConsumptionHistory, MEAL_PRICING } from '../../data/staticData';
import './MealTracking.css';

const MealTracking = () => {
  // Convert boolean history to numerical cost for graph
  const chartData = studentConsumptionHistory.map(day => ({
    date: day.date.slice(5), // Just MM-DD
    Breakfast: day.breakfast ? MEAL_PRICING.breakfast : 0,
    Lunch: day.lunch ? MEAL_PRICING.lunch : 0,
    Snacks: day.snacks ? MEAL_PRICING.snacks : 0,
    Dinner: day.dinner ? MEAL_PRICING.dinner : 0
  })).reverse(); // Oldest to newest

  const generateBillPDF = () => {
    const doc = new jsPDF();
    
    // Header Styling
    doc.setFontSize(22);
    doc.setTextColor(248, 87, 65); // Match Orange theme
    doc.text('Official Mess Bill', 105, 20, { align: 'center' });
    
    doc.setFontSize(11);
    doc.setTextColor(100, 100, 100);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, 28, { align: 'center' });
    
    let totalCost = 0;
    const tableData = studentConsumptionHistory.map(day => {
      let dayCost = 0;
      if (day.breakfast) dayCost += MEAL_PRICING.breakfast;
      if (day.lunch) dayCost += MEAL_PRICING.lunch;
      if (day.snacks) dayCost += MEAL_PRICING.snacks;
      if (day.dinner) dayCost += MEAL_PRICING.dinner;
      totalCost += dayCost;
      
      return [
        day.date,
        day.breakfast ? 'Yes' : '-',
        day.lunch ? 'Yes' : '-',
        day.snacks ? 'Yes' : '-',
        day.dinner ? 'Yes' : '-',
        `Rs. ${dayCost}`
      ];
    });

    autoTable(doc, {
      startY: 35,
      head: [['Date', 'Breakfast (Rs. 60)', 'Lunch (Rs. 60)', 'Snacks (Rs. 10)', 'Dinner (Rs. 60)', 'Daily Total']],
      body: tableData,
      theme: 'striped',
      headStyles: { 
        fillColor: [248, 87, 65], // Custom orange 
        textColor: 255,
        halign: 'center',
        fontSize: 10
      },
      bodyStyles: {
        halign: 'center',
      },
      columnStyles: {
        0: { halign: 'left' },
        5: { fontStyle: 'bold' }
      }
    });

    doc.setFontSize(14);
    doc.setTextColor(51, 51, 51);
    doc.text(`Total Monthly Due: Rs. ${totalCost}`, 14, (doc.lastAutoTable ? doc.lastAutoTable.finalY : 150) + 15);
    
    // Convert to a blob URL to ensure forceful download & view
    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    
    // Open in a new tab to let them view the data and bill price
    window.open(pdfUrl, '_blank');
    
    // Force classical HTML5 local file download as a fallback
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Mess_Monthly_Bill.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="card" style={{width: '100%', padding: '20px', background: 'white', border: '1px solid #eaeaea', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)'}}>
      <div className="card-header" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 className="card-title" style={{color: '#333'}}>Daily Consumption Analysis (₹)</h3>
        <button onClick={generateBillPDF} className="btn btn-primary" style={{ backgroundColor: '#f85741', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Download Bill & History (PDF)
        </button>
      </div>
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
             <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
             <XAxis dataKey="date" stroke="#999" />
             <YAxis stroke="#999" />
             <Tooltip 
               contentStyle={{ backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '8px', color: '#333' }}
               itemStyle={{ color: '#333' }}
             />
             <Legend />
             <Bar dataKey="Breakfast" stackId="a" fill="#f85741" />
             <Bar dataKey="Lunch" stackId="a" fill="#4caf50" />
             <Bar dataKey="Snacks" stackId="a" fill="#ffc844" />
             <Bar dataKey="Dinner" stackId="a" fill="#ff9a44" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MealTracking;