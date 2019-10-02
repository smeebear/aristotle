import React from 'react';
import ExampleQuiz from './components/ExampleQuiz'
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ResultsPage from './components/ResultsPage';

function App() {
  return (
    <Router>
      <NavBar title={ "Aristotle" } />
      <Route exact path='/' component={ExampleQuiz} />
      <Route path='/results' component={ResultsPage} />
    </Router>
  );
}

export default App;
