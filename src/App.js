import React, { Component } from 'react';
import Header from './componentes/Header/Header';
import Tablero from './componentes/Tablero/Tablero';
import construirBarajas from './utils/construirBarajas';

import './App.css';

const getEstadoInicial = () => {
  const baraja = construirBarajas();
  return{
    baraja,
    cartasSeleccionadas: [],
    comparando: false
  };
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = getEstadoInicial();
  }
  render() {
    return (
      <div className="App">
       <Header />
       <Tablero 
         //crear propiedad baraja
         baraja = {this.state.baraja}
       />
      </div>
    );
  }
}

export default App;
