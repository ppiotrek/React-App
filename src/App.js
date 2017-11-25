import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Dashboard from './components/Dashboard';
import Header from './components/Header';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Header/>
              <Route exact path="/" component={Dashboard}/>
              {/*<Route path="/profile" component={Profile}/>*/}
              {/*<Route path="/dashboard" component={Dashboard}/>*/}
              {/*<Route path="/counter" component={Counter}/>*/}
          </div>
      </Router>
    );
  }
}

export default App;
