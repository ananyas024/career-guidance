import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ExploreCareer() {
  const [careerPaths, setCareerPaths] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data using Axios
    axios.get('http://localhost:5000/api/career-path')
      .then(response => {
        // Handle successful response
        setCareerPaths(response.data);
      })
      .catch(error => {
        // Handle errors
        setError(error.message);
        console.error('Error fetching career paths:', error);
      });
  }, []);

  return (
    <div>
      <h1>Explore Career Paths</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {careerPaths.length > 0 ? (
          careerPaths.map(path => (
            <li key={path.id}>{path.name}: {path.description}</li>
          ))
        ) : (
          <p>No career paths available.</p>
        )}
      </ul>
    </div>
  );
}

export default ExploreCareer;
