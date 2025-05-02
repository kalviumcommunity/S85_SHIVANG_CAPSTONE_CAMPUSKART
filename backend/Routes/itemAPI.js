const express = require('express');
const router = express.Router();
const Item = require('../models/item'); // Import the Item model

// GET API to fetch all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find(); // Fetch all items from the database
    res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching items:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});
// GET API to fetch a specific user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Fetch user by ID
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { name, description, price, category, stock },
      { new: true, runValidators: true } // Return the updated document and validate the input
    );
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item updated successfully', item: updatedItem });
  } catch (error) {
    console.error('Error updating item:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});
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