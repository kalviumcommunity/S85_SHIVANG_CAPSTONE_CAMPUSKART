const express = require('express');
const router = express.Router();
const Item = require('../models/item'); // Import the Item model

// POST API to create a new item
router.post('/create', async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;

    // Check if all required fields are provided
    if (!name || !description || !price || !category || stock === undefined) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new item
    const newItem = new Item({
      name,
      description,
      price,
      category,
      stock,
    });

    // Save the item to the database
    await newItem.save();

    res.status(201).json({ message: 'Item created successfully', item: newItem });
  } catch (error) {
    console.error('Error creating item:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;