import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar'; // optional if you're not using a separate Navbar
import './App.css';

import BuyerPage from "./pages/marketplace/BuyerPage";
import SellerPage from "./pages/marketplace/SellerPage";
import MarketplaceLanding from "./pages/marketplace/MarketplaceLanding";

function App() {
  return (
    <Router>
      {/* You can comment out <Navbar /> if you're embedding it directly in Home */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
     <Route path="/marketplace/buyer" element={<BuyerPage />} />
    <Route path="/marketplace/seller" element={<SellerPage />} />
    <Route path="/marketplace" element={<MarketplaceLanding />} />

      </Routes>

 </Routes>

    </Router>
  );
}

export default App;

