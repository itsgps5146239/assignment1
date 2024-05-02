import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard!</p>
      
      {/* Sign In Button */}
      <Link to="/signin">
        <button>Sign In</button>
      </Link>
      
      {/* Sign Up Button */}
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default DashboardPage;
