// src/pages/marketplace/SellerPage.jsx
import React, { useState } from "react";
import AddProductForm from "./AddProductForm";
import ProductCard from "./ProductCard";
import "./marketplace.css";

export default function SellerPage() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="page-container">
      <h2 className="section-title">Seller Dashboard</h2>
      <AddProductForm onAdd={handleAddProduct} />
      <h3 className="section-title mt-10">Your Listings</h3>
      <div className="product-grid">
        {products.map((p, index) => (
          <ProductCard key={index} product={p} onChat={() => {}} onLike={() => {}} />
        ))}
      </div>
    </div>
  );
}
