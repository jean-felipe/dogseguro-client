import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import Header from './header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
