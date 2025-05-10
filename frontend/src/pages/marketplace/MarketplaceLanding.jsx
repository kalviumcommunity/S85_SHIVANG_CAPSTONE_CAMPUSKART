// src/pages/marketplace/MarketplaceLanding.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./marketplace.css";

export default function MarketplaceLanding() {
  const navigate = useNavigate();

  return (
    <div className="page-container flex flex-col items-center justify-center text-center">
      <h1 className="section-title mb-4">Welcome to CampusKart Marketplace</h1>
      <p className="text-gray-600 mb-10 max-w-md">
        Choose your role to continue — whether you're listing items for sale or browsing items to buy.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
        <button
          onClick={() => navigate("/marketplace/seller")}
          className="bg-green-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-green-700 transition"
        >
          I'm a Seller
        </button>
        <button
          onClick={() => navigate("/marketplace/buyer")}
          className="bg-blue-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
        >
          I'm a Buyer
        </button>
      </div>
    </div>
  );
}
