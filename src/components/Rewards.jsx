import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/styles.css'; 


const Rewards = () => {
  const [rewards, setRewards] = useState([]);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    // Fetch available rewards
    axios.get('http://localhost:8080/rewards')
      .then(response => setRewards(response.data))
      .catch(error => console.error('Error fetching rewards', error));

    // Fetch current points
    axios.get('http://localhost:8080/points')
      .then(response => setPoints(response.data))
      .catch(error => console.error('Error fetching points', error));
  }, []);

  const handleRedeem = (reward) => {
    axios.post('http://localhost:8080/rewards/redeem', { points })
      .then(response => alert(response.data))
      .catch(error => console.error('Error redeeming points', error));
  };

  return (
    <div>
      <h2>Available Rewards</h2>
      <ul>
        {rewards.map((reward, index) => (
          <li key={index}>
            {reward} 
            <button onClick={() => handleRedeem(reward)}>Redeem</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rewards;
