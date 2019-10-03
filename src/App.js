import React from 'react';
import ExampleQuiz from './components/ExampleQuiz'
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ResultsVert from './components/ResultsVert';
import Contact from './components/Contact';
import ThankYou from './components/ThankYou';
import Parent from './components/Parent'

function App() {
  return (
    <Router>
      <NavBar title={ "Aristotle" } />
      <div style={{margin: 'auto', maxWidth: '1000px'}} >
      <Route exact path='/' component={ExampleQuiz} />
      <Route path='/results' component={ResultsVert} />
      <Route path='/contact' component={Contact} />
      <Route path='/thanks' component={ThankYou} />
      <Route exact path='/parentdash' component={Parent} />
      </div>
    </Router>
  );
}

export default App;
