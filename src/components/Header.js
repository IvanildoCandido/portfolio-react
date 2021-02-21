import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <div className="logo">
            <div className="logo-img"></div>
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
