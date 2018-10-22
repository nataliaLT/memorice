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
         cartasSeleccionadas = {this.state.cartasSeleccionadas}
         seleccionarCarta = {(carta) => this.seleccionarCarta(carta)}
       />
      </div>
    );
  }
  seleccionarCarta(carta){
      if(this.state.comparando || this.state.cartasSeleccionadas.indexOf(carta) > -1 || carta.fueAdivinada){
        return;
      }
      const cartasSeleccionadas = [...this.state.cartasSeleccionadas, carta];
      this.setState({
        cartasSeleccionadas
      })
  }
}

export default App;
