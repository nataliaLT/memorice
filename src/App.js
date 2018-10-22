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
    comparando: false,
    intentos:0
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
      });
      if(cartasSeleccionadas.length === 2){//si escojo dos cartas
        this.compararCartas(cartasSeleccionadas)//comparo las cartas
      }
  }
  compararCartas(cartasSeleccionadas){
    this.setState({comparando:true}) //actualizo el estado de mi propiedad comparando
    setTimeout(()=>{
      const [primeraOpcion, segundaOpcion] = cartasSeleccionadas;
      let baraja = this.state.baraja;

      if(primeraOpcion.icono === segundaOpcion){//si elige la misma carta el usuario adivino
        baraja = baraja.map((carta)=>{
          if(carta.icono !== primeraOpcion){//en caso de que la carta sea distinta
            return carta
          }
          return {...carta, fueAdivinada: true};
        })
      }
      this.ganaste(baraja);
      this.setState({
      cartasSeleccionadas:[],
      baraja,
      comparando: false
    })
    }, 1000)
  }
  ganaste(baraja){
    if(baraja.filter((carta)=>!carta.fueAdivinada).length === 0){
      alert(`Felicitaciones ganaste en ${this.state.intentos} intentos!`)
    }
  }
  reiniciarJuego(){
    this.setState(
      getEstadoInicial()
    );
  }
}

export default App;
