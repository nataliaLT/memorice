import React, { Component } from 'react';
import Carta from '../Carta/Carta';
import './Tablero.css'

class Tablero extends Component {
    render(){
        return(
            <div className="tablero">
            {this.props.baraja.map((carta)=>{
                const estasComparando = this.props.cartasSeleccionadas.indexOf(carta) > -1
               return <Carta icono={carta.icono}/>  
            } 
            )}
            </div>
        )
    }
}

export default Tablero;