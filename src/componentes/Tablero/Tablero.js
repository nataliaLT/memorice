import React, { Component } from 'react';
import Carta from '../Carta/Carta';
import './Tablero.css'

class Tablero extends Component {
    render(){
        const cartas = [1,2,3,4,5];//Arreglo que contendra mis cartas
        return(
            <div className="tablero">
            {cartas.map((carta)=> <Carta></Carta>)}
            </div>
        )
    }
}

export default Tablero;