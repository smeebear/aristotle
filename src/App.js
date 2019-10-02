import React from 'react';
import ExampleQuiz from './components/ExampleQuiz'
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar title={ "Aristotle" } />
      <Route path='/' component={ExampleQuiz}/>
    </Router>
  );
}

export default App;
