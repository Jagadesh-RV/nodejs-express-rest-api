const express = require('express');
const router = express.Router();
const { z } = require('zod');

// Test 1: Operational Error (AppError)
router.get('/operational', (req, res, next) => {
  next(new AppError('This is an expected error', 400));
});

// Test 2: Validation Error (Zod)
router.get('/validation', (req, res, next) => {
  const schema = z.object({ name: z.string() });
  schema.parse({ name: 123 }); // Triggers ZodError
});

// Test 3: Systemic/Programming Error
router.get('/bug', (req, res, next) => {
  throw new Error('This is an unexpected crash');
});

module.exports = router;