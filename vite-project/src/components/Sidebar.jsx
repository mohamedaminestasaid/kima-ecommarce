import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

