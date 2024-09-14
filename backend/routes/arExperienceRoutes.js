const express = require('express');
const router = express.Router();

// Mock data for AR experiences
const arExperiences = [
  { id: 1, name: 'Virtual Office Tour', description: 'Experience a virtual tour of a modern office space.' },
  { id: 2, name: 'Job Role Simulation', description: 'Simulate daily tasks of a specific job role.' },
];

// Get all AR experiences
router.get('/', (req, res) => {
  res.json(arExperiences);
});

// Get a specific AR experience by ID
router.get('/:id', (req, res) => {
  const experience = arExperiences.find(e => e.id === parseInt(req.params.id));
  if (!experience) return res.status(404).send('AR experience not found.');
  res.json(experience);
});

module.exports = router;
