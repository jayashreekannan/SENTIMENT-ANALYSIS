import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/styles.css';


const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch sentiment history
    axios.get('http://localhost:8080/history')
      .then(response => setHistory(response.data))
      .catch(error => console.error('Error fetching history', error));
  }, []);

  return (
    <div>
      <h2>Sentiment History</h2>
      <table>
        <thead>
          <tr>
            <th>Text</th>
            <th>Sentiment (%)</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr key={index}>
              <td>{entry.text}</td>
              <td>{entry.sentimentPercentage}</td>
              <td>{entry.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
