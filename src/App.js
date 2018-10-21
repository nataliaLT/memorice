import React, { Component } from 'react';
import Header from './componentes/Header/Header';
import Tablero from './componentes/Tablero/Tablero';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Tablero />
      </div>
    );
  }
}

export default App;
