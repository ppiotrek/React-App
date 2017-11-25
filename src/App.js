import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Dashboard from './components/Dashboard';
import Header from './components/Header';
import ToDo from './components/ToDo';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Header/>
              <Route exact path="/" component={Dashboard}/>
              <Route path="/todo" component={ToDo}/>
              {/*<Route path="/dashboard" component={Dashboard}/>*/}
              {/*<Route path="/counter" component={Counter}/>*/}
          </div>
      </Router>
    );
  }
}

export default App;
