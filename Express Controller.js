// A standard Express controller implementation
const express = require('express');
const router = express.Router();

// Get a list of products
router.get('/', (req, res) => {
  // Always wrap in a try-catch for async operations
  // Send 200 OK
});

// Create a resource
router.post('/', (req, res) => {
  // Send 201 Created on success
});

// Update specific fields
router.patch('/:id', (req, res) => {
  // Use 200 OK or 204 No Content
});