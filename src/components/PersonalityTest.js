import React, { useState } from 'react';
import careerSuggestions from '../data/data'; // Adjust the path as necessary
import './PersonalityTest.css';

const questions = [
  // Conscientiousness
  { id: 1, text: "I prefer to have a detailed plan before starting a task." },
  { id: 2, text: "I always follow through with tasks until they are completed." },
  { id: 3, text: "I am highly organized in my daily life and work." },
  { id: 4, text: "I find it easy to stay focused on my goals over long periods." },
  { id: 5, text: "I enjoy setting and achieving challenging goals." },

  // Agreeableness
  { id: 6, text: "I am always ready to help others, even if it is inconvenient." },
  { id: 7, text: "I tend to avoid arguments and prefer to maintain harmony in relationships." },
  { id: 8, text: "I enjoy working in teams and collaborating with others." },
  { id: 9, text: "I often go out of my way to understand others' perspectives." },
  { id: 10, text: "I like making others feel comfortable and valued." },

  // Extraversion
  { id: 11, text: "I feel energized when I am around other people." },
  { id: 12, text: "I enjoy being the center of attention in social situations." },
  { id: 13, text: "I thrive in environments where I interact with others frequently." },
  { id: 14, text: "I like to lead conversations and express my opinions openly." },
  { id: 15, text: "I feel comfortable meeting new people and making friends easily." },

  // Openness to Experience
  { id: 16, text: "I enjoy exploring new ideas and trying out unfamiliar activities." },
  { id: 17, text: "I am open to different perspectives and enjoy learning about various cultures." },
  { id: 18, text: "I am drawn to creative activities like art, music, or writing." },
  { id: 19, text: "I find it exciting to travel to new places and meet people from different backgrounds." },
  { id: 20, text: "I prefer tasks that require innovation and creative thinking." },

  // Neuroticism
  { id: 21, text: "I often feel anxious or stressed about my work and personal life." },
  { id: 22, text: "I find it hard to calm down after being upset or frustrated." },
  { id: 23, text: "I tend to worry about things going wrong, even when they seem fine." },
  { id: 24, text: "I feel overwhelmed when faced with a lot of responsibility." },
  { id: 25, text: "I am often moody and experience frequent mood swings." }
];

const PersonalityTest = () => {
  const [responses, setResponses] = useState({
    conscientiousness: [],
    agreeableness: [],
    extraversion: [],
    openness: [],
    neuroticism: []
  });
  
  const [result, setResult] = useState([]);

  const handleResponseChange = (trait, response) => {
    setResponses(prev => ({
      ...prev,
      [trait]: [...prev[trait], response]
    }));
  };

  const calculateScores = (responses) => {
    const scores = {
      conscientiousness: responses.conscientiousness.length,
      agreeableness: responses.agreeableness.length,
      extraversion: responses.extraversion.length,
      openness: responses.openness.length,
      neuroticism: responses.neuroticism.length,
    };
    return scores;
  };

  const determineCombinationKey = (scores) => {
    return `${scores.conscientiousness > 3 ? 'high' : 'low'}-conscientiousness-${scores.extraversion > 3 ? 'high' : 'low'}-extraversion-${scores.openness > 3 ? 'high' : 'low'}-openness`;
  };

  const getCareerSuggestions = (responses) => {
    const scores = calculateScores(responses);
    const combinationKey = determineCombinationKey(scores);
    return careerSuggestions[combinationKey] || [];
  };

  const handleSubmit = () => {
    const suggestions = getCareerSuggestions(responses);
    setResult(suggestions);
  };

  return (
    <div className="personality-test-container">
      <h1>Personality Test</h1>
      <form>
        {questions.map((question) => {
          const trait = getTraitFromQuestionId(question.id);
          return (
            <div key={question.id} className="mb-4">
              <label>{question.text}</label>
              <div>
                <button type="button" onClick={() => handleResponseChange(trait, 'yes')}>Yes</button>
                <button type="button" onClick={() => handleResponseChange(trait, 'no')}>No</button>
              </div>
            </div>
          );
        })}
      </form>
      <button className="submit" onClick={handleSubmit}>Submit</button>
      {result.length > 0 && <CareerSuggestions suggestions={result} />}
    </div>
  );
};

const getTraitFromQuestionId = (id) => {
  if (id <= 5) return 'conscientiousness';
  if (id <= 10) return 'agreeableness';
  if (id <= 15) return 'extraversion';
  if (id <= 20) return 'openness';
  return 'neuroticism';
};

const CareerSuggestions = ({ suggestions }) => {
  return (
    <div>
      <h3>Your Career Suggestions:</h3>
      <ul>
        {suggestions.map((career) => (
          <li key={career}>{career}</li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalityTest;
