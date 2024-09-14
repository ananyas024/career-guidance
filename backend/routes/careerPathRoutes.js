const express = require('express');
const router = express.Router();

// Mock data for career paths
const careerPaths = [
  { id: 1, name: 'Software Engineer', description: 'Develops software applications.' },
  { id: 2, name: 'Data Scientist', description: 'Analyzes and interprets complex data.' },
];

// Get all career paths
router.get('/', (req, res) => {
  res.json(careerPaths);
});

// Get a specific career path by ID
router.get('/:id', (req, res) => {
  const careerPath = careerPaths.find(cp => cp.id === parseInt(req.params.id));
  if (!careerPath) return res.status(404).send('Career path not found.');
  res.json(careerPath);
});

module.exports = router;
