// src/pages/marketplace/BuyerPage.jsx
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./marketplace.css";

export default function BuyerPage() {
  const [liked, setLiked] = useState([]);
  const [products] = useState([
    {
      title: "Used Physics Book",
      price: 200,
      description: "Great condition, 2nd-year syllabus",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Desk Lamp",
      price: 500,
      description: "Almost new with 3 brightness modes",
      imageUrl: "https://via.placeholder.com/300x200",
    },
  ]);

  const handleLike = (product) => {
    if (!liked.includes(product.title)) {
      setLiked([...liked, product.title]);
    }
  };

  const handleChat = (product) => {
    alert(`Initiating chat for: ${product.title}`);
  };

  return (
    <div className="page-container">
      <h2 className="section-title">Marketplace for Buyers</h2>
      <div className="product-grid">
        {products.map((p, index) => (
          <ProductCard key={index} product={p} onChat={handleChat} onLike={handleLike} />
        ))}
      </div>
    </div>
  );
}
