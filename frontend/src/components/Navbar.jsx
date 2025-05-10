import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">CampusKart</Link>
      <div className="space-x-4">
        <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        <Link to="/signup" className="text-gray-700 hover:text-blue-600">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
