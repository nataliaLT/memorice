import React, { Component } from 'react';
import './Carta.css';
import FlipCard from 'react-flipcard';

class Carta extends Component{
    render(){
        return(
        <div className="carta" onClick={this.props.seleccionarCarta}>
        <FlipCard
        flipped={this.props.comparando || this.props.fueAdivinada}//si la carta esta dada vuelta o si la adivino
        disabled={true} //para que ya no se den vuelta solas
        >
            <div className="oculta"></div>
            <div className="contenido">
            <i className={`fa ${this.props.icono} fa-5x`} />
            </div>
        </FlipCard>
        </div>
        )
    }
}

export default Carta;