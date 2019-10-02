import React from 'react';
import ExampleQuiz from './components/ExampleQuiz'
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import ResultsPage from './components/ResultsPage';
import ResultsVert from './components/ResultsVert';
import Contact from './components/Contact';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <Router>
      <NavBar title={ "Aristotle" } />
      <Route exact path='/' component={ExampleQuiz} />
      <Route path='/results' component={ResultsVert} />
      <Route path='/contact' component={Contact} />
      <Route path='/thanks' component={ThankYou} />
    </Router>
  );
}

export default App;
