import React from 'react';
import { Link } from 'react-router-dom';
import './styles/styles.css'; 


const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Sentiment Analysis Tracking System</h1>
      <p>Track your sentiment, earn rewards, and view your sentiment history with ease.</p>
      
      <div className="home-links">
        <Link to="/sentiment">Analyze Sentiment</Link>
        <Link to="/rewards">View Rewards</Link>
        <Link to="/history">View History</Link>
      </div>
    </div>
  );
};

export default Home;
