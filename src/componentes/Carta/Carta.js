import React, { Component } from 'react';
import './Carta.css';
import FlipCard from 'react-flipcard-2';

class Carta extends Component{
    render(){
        return(
        <div className="carta">
        <FlipCard>
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