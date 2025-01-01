import React, { useState } from 'react';
import axios from 'axios';
import './styles/styles.css'; 


const SentimentAnalysis = () => {
  const [inputText, setInputText] = useState('');
  const [sentimentResult, setSentimentResult] = useState(null);

  const analyzeSentiment = async () => {
    try {
      const response = await axios.post('http://localhost:8080/analyze', { text: inputText });
      setSentimentResult(response.data);
    } catch (error) {
      console.error('Error analyzing sentiment', error);
    }
  };

  return (
    <div>
      <textarea 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type your text here..."
      ></textarea>
      <button onClick={analyzeSentiment}>Analyze Sentiment</button>

      {sentimentResult && (
        <div>
          <h3>Sentiment: {sentimentResult.sentiment}</h3>
          <p>Percentage: {sentimentResult.percentage}%</p>
          <p>Emoji: {sentimentResult.emoji}</p>
          <p>Points Earned: {sentimentResult.points}</p>
        </div>
      )}
    </div>
  );
};

export default SentimentAnalysis;
