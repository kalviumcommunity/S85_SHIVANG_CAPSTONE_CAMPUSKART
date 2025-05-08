const express = require("express");
const Item = require("../models/item");

const router = express.Router();

// GET all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// GET item by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.status(200).json(item);
  } catch (error) {
    console.error("Error fetching item:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT update item
router.put("/:id", async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;

    const updateData = {
      ...(name && { name }),
      ...(description && { description }),
      ...(price && { price }),
      ...(category && { category }),
      ...(stock !== undefined && { stock }),
    };

    const updatedItem = await Item.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item updated successfully", item: updatedItem });
  } catch (error) {
    console.error("Error updating item:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// POST create item
router.post("/create", async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;

    if (!name || !description || !price || !category || stock === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newItem = new Item({ name, description, price, category, stock });
    await newItem.save();

    res.status(201).json({ message: "Item created successfully", item: newItem });
  } catch (error) {
    console.error("Error creating item:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
