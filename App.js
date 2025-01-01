import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SentimentAnalysis from './components/SentimentAnalysis';
import Rewards from './components/Rewards';
import History from './components/History';
import './styles/styles.css'; 


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sentiment" component={SentimentAnalysis} />
        <Route path="/rewards" component={Rewards} />
        <Route path="/history" component={History} />
      </Switch>
    </Router>
  );
}

export default App;

