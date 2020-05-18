import React, { Component } from 'react'
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark main-header">
                <span className="navbar-header-title" style={{ margin: '-15px 0px' }} >
                    <img src={logo} alt="logo" width='80' style={{ margin: '0px' }} />
                    FAREJADOR DE CNPJ
                </span>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link pointer" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item pointer">
                            <Link className="nav-link pointer" to="/empresa-pesquisar">Pesquisar empresas</Link>
                        </li>
                    </ul>

                </div>
                <span id="butInstall" title="Instalar Farejador" className="fas fa-download btn" hidden
                    style={{ color: '#FFF', position: 'absolute', top: '30px', right: '30px', border: 'solid 1px #999' }}>
                </span>
            </nav>
        )
    }
}
