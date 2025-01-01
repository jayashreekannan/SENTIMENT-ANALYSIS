import { Link } from 'react-router-dom';
import './styles/styles.css'; 


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sentiment">Sentiment Analysis</Link></li>
        <li><Link to="/rewards">Rewards</Link></li>
        <li><Link to="/history">History</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
