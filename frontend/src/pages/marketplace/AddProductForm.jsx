// src/pages/marketplace/AddProductForm.jsx
import React, { useState } from "react";
import "./marketplace.css";

export default function AddProductForm({ onAdd }) {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(product);
    setProduct({ title: "", price: "", description: "", imageUrl: "" });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Product Title"
        value={product.title}
        onChange={handleChange}
        required
      />
      <input
        name="price"
        placeholder="Price (₹)"
        value={product.price}
        onChange={handleChange}
        required
        type="number"
      />
      <input
        name="imageUrl"
        placeholder="Image URL"
        value={product.imageUrl}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
        required
        rows="4"
      />
      <button type="submit">Add Product</button>
    </form>
  );
}
