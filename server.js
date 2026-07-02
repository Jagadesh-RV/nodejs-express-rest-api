const express = require('express');
const app = express();

app.use(express.json());

// Get a list of products
app.get('/products', (req, res) => {
    res.status(200).json([
        { id: 1, name: "Laptop" },
        { id: 2, name: "Phone" }
    ]);
});

// Create a resource
app.post('/products', (req, res) => {
    res.status(201).json({
        message: "Product created",
        data: req.body
    });
});

// Update specific fields
app.patch('/products/:id', (req, res) => {
    res.status(200).json({
        message: `Product ${req.params.id} updated`,
        updates: req.body
    });
});

