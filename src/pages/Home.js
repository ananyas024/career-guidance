import React from 'react';
import { Container, Button, Carousel, Card } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <Container className="hero-content">
          <h1>Find Your Perfect Career Path</h1>
          <p>Your journey to a fulfilling career starts here. Explore, learn, and grow with our innovative tools.</p>
          <div className="hero-buttons">
            <Button variant="light" size="lg" href="/personality-test">Take the Personality Test</Button>
            <Button variant="primary" size="lg" href="/explore-career">Explore Career Paths</Button>
          </div>
        </Container>
      </div>

      {/* Feature Carousel */}
      <Container className="feature-carousel">
        <Carousel>
          <Carousel.Item>
            <div className="feature-item">
              <h3>Discover Your Strengths</h3>
              <p>Our personality test helps you understand your strengths and interests.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="feature-item">
              <h3>Explore Career Paths</h3>
              <p>Find career paths that align with your skills and passions.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="feature-item">
              <h3>Prepare for Success</h3>
              <p>Get tips and resources to help you prepare for your chosen career.</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Testimonials Section */}
      <Container className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <Card>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>"The personality test was eye-opening! It really helped me understand my strengths."</p>
                <footer className="blockquote-footer">Jane Doe</footer>
              </blockquote>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>"Exploring career paths with this tool was so easy and insightful."</p>
                <footer className="blockquote-footer">John Smith</footer>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Home;
