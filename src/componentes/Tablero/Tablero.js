import React, { Component } from 'react';
import Carta from '../Carta/Carta';
import './Tablero.css'

class Tablero extends Component {
    render(){
        return(
            <div className="tablero">
            {this.props.baraja.map((carta, index)=>{
                const comparando = this.props.cartasSeleccionadas.indexOf(carta) > -1
               return <Carta key={index} icono={carta.icono} comparando={comparando}
                seleccionarCarta={()=> this.props.seleccionarCarta(carta)} //llamo a la función que hice en el app  
                fueAdivinada={carta.fueAdivinada}
               />  
            } 
            )}
            </div>
        )
    }
}

export default Tablero;