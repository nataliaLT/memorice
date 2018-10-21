import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (<header>
            <div className="titulo">Memorice</div>
            <button className="botonIniciar">
                Reiniciar
            </button>
            <div className="titulo">
                intentos:
            </div>
        </header>)

    }
}

export default Header;