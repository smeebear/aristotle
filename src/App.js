import React, { Component } from 'react';
import ExampleQuiz from './components/ExampleQuiz'
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ResultsVert from './components/ResultsVert';
import Contact from './components/Contact';
import ThankYou from './components/ThankYou';
import Parent from './components/Parent'
import Teacher from './components/Teacher'
import Learning from './components/learning/Learning'
import Video from './components/learning/Video';
import Reading from './components/learning/Reading';
import Speaking from './components/learning/Speaking';
import logo from './img/logo.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
    this.notLoading = this.notLoading.bind(this);
  }

  notLoading() {
    this.setState(() => {
      return {loading: false}
    })
  }

  componentDidMount(){
    setTimeout(this.notLoading, 2000)
  }

  render (){

    if(this.state.loading === true){
      return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}} >
          <img src={logo} alt='' width='400px' height='400px' />
        </div>
      )
    }

    return (
      <Router>
        <NavBar title={ "Aristotle" } />
        <div style={{margin: 'auto', maxWidth: '1000px'}} >
        <Route exact path='/' component={ExampleQuiz} />
        <Route path='/results' component={ResultsVert} />
        <Route path='/contact' component={Contact} />
        <Route path='/thanks' component={ThankYou} />
        <Route path='/parentdash' component={Parent} />
        <Route path='/teacherdash' component={Teacher} />
        <Route path='/learning' component={Learning} />
        <Route path='/learning/visual' component={Video} />
        <Route path='/learning/aural' component={Reading} />
        <Route path='/learning/verbal' component={Speaking} />
        <Route path='/learning/physical' component={Speaking} />
        <Route path='/learning/logical' component={Reading} />
        </div>
      </Router>
    );
  }
}

export default App;
