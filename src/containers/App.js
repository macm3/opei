import React, { Component } from 'react';
import logo from './../images/logo.svg';
import About from './About';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={About}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
