import React, { Component } from 'react';
import './Carta.css';

class Carta extends Component{
    render(){
        return(
        <div className="carta">
        <i className={`fa ${this.props.icono} fa-5x`} />
        </div>
        )
    }
}

export default Carta;