import React, { Component } from 'react';
import '../styles/header.css';
import logo from '../assets/images/logo.svg'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <div className="logo">
            <img src={logo} alt="Logo Ivanildo"/>
          </div>
          <div className="menu">
            <nav>
              <ul>
                <li className="active">
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#home">Sobre</a>
                </li>
                <li>
                  <a href="#home">Tecnologias</a>
                </li>
                <li>
                  <a href="#home">Projetos</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
