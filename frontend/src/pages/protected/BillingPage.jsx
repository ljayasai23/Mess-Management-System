import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../../components/AdminDashboard/AdminHeader';
import './BillingPage.css';

const BillingPage = () => {
  // Sample billing data (replace with API call)
  const [bills, setBills] = useState([
    {
      id: 1,
      invoiceNumber: 'INV-2023-001',
      date: '2023-06-15',
      customer: 'student123@example.com',
      amount: '$150.00',
      status: 'Paid',
      dueDate: '2023-06-30',
      actions: 'Download'
    },
    {
      id: 2,
      invoiceNumber: 'INV-2023-002',
      date: '2023-06-16',
      customer: 'student456@example.com',
      amount: '$200.00',
      status: 'Pending',
      dueDate: '2023-07-01',
      actions: 'Download'
    },
    {
      id: 3,
      invoiceNumber: 'INV-2023-003',
      date: '2023-06-17',
      customer: 'student789@example.com',
      amount: '$175.00',
      status: 'Overdue',
      dueDate: '2023-06-20',
      actions: 'Download'
    }
  ]);

  // State for filters/pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const billsPerPage = 5;

  // Filter bills
  const filteredBills = bills.filter(bill =>
    Object.values(bill).some(val =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination logic
  const indexOfLastBill = currentPage * billsPerPage;
  const indexOfFirstBill = indexOfLastBill - billsPerPage;
  const currentBills = filteredBills.slice(indexOfFirstBill, indexOfLastBill);
  const totalPages = Math.ceil(filteredBills.length / billsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="admin-layout">
      <AdminHeader />
      <div className="billing-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/admin">Dashboard</Link> &gt; <span>Billing</span>
        </div>

        <h1>Billing Management</h1>

        {/* Search and Actions */}
        <div className="billing-actions">
          <input
            type="text"
            placeholder="Search invoices..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <button className="generate-invoice-btn">
            + Generate Invoice
          </button>
        </div>

        {/* Billing Table */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Invoice #</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentBills.map((bill) => (
                <tr key={bill.id}>
                  <td data-label="Invoice #">{bill.invoiceNumber}</td>
                  <td data-label="Date">{bill.date}</td>
                  <td data-label="Customer">{bill.customer}</td>
                  <td data-label="Amount">{bill.amount}</td>
                  <td data-label="Status">
                    <span className={`status-badge ${bill.status.toLowerCase()}`}>
                      {bill.status}
                    </span>
                  </td>
                  <td data-label="Due Date">{bill.dueDate}</td>
                  <td data-label="Actions">
                    <button className="action-btn">{bill.actions}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filteredBills.length > billsPerPage && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BillingPage;