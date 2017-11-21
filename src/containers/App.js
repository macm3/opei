import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './../components/Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/sobre' component={About}/>
          </Switch>
        </BrowserRouter>
          </Navbar>
        
      </div>
    );
  }
}