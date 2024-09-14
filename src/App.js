import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExploreCareer from './pages/ExploreCareer';
import PersonalityTest from './components/PersonalityTest'; // Correct import
import ARExperience from './pages/ARExperience';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore-career" element={<ExploreCareer />} />
        <Route path="/personality-test" element={<PersonalityTest />} /> {/* Updated path */}
        <Route path="/ar-experience" element={<ARExperience />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
