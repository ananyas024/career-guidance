// src/components/PersonalityTest.js
import React, { useState } from 'react';
import axios from 'axios';

const questions = [
  { id: 1, text: 'How do you prefer to spend your free time?' },
  { id: 2, text: 'Do you enjoy working in a team?' },
  { id: 3, text: 'How do you handle stressful situations?' },
  { id: 4, text: 'Are you more of an introvert or extrovert?' },
  { id: 5, text: 'Do you prefer structured plans or spontaneous activities?' }
];

function PersonalityTest() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState('');

  const handleChange = (questionId, event) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: event.target.value
    }));
  };

  const handleSubmit = () => {
    axios.post('http://localhost:5001/api/personality-test', { answers })
      .then(response => {
        setResult(response.data.result);
      })
      .catch(error => {
        console.error('There was an error submitting the personality test!', error);
      });
  };

  return (
    <div>
      <h1>Personality Test</h1>
      <form>
        {questions.map(question => (
          <div key={question.id}>
            <label>
              {question.text}
              <input
                type="text"
                value={answers[question.id] || ''}
                onChange={(event) => handleChange(question.id, event)}
              />
            </label>
          </div>
        ))}
      </form>
      <button onClick={handleSubmit}>Submit</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default PersonalityTest;

