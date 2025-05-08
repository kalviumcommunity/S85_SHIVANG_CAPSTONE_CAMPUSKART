// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-purple-600">CampusKart</Link>
      <div className="space-x-4">
        <Link to="/post" className="text-gray-700 hover:text-purple-600">Post Item</Link>
        <Link to="/login" className="text-white bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">Login</Link>
        <Link to="/register" className="text-white bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">Register</Link>
      </div>
    </nav>
  );
}
