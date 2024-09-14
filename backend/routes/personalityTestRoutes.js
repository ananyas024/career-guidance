const express = require('express');
const router = express.Router();

// Mock data for personality tests
const personalityTests = [
  { id: 1, name: 'MBTI', description: 'Myers-Briggs Type Indicator.' },
  { id: 2, name: 'Big Five', description: 'Five-factor personality test.' },
];

// Get all personality tests
router.get('/', (req, res) => {
  res.json(personalityTests);
});

// Get a specific personality test by ID
router.get('/:id', (req, res) => {
  const test = personalityTests.find(t => t.id === parseInt(req.params.id));
  if (!test) return res.status(404).send('Personality test not found.');
  res.json(test);
});

module.exports = router;
