// src/pages/marketplace/ProductCard.jsx
import React from "react";
import "./marketplace.css";

export default function ProductCard({ product, onChat, onLike }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} />
      <div className="product-title">{product.title}</div>
      <div className="product-price">₹{product.price}</div>
      <div className="actions">
        <button className="chat-button" onClick={() => onChat(product)}>
          Chat
        </button>
        <button className="like-button" onClick={() => onLike(product)}>
          ❤️
        </button>
      </div>
    </div>
  );
}
