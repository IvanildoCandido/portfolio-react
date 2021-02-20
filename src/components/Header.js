import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <h2>Ivanildo Cândido</h2>
        </div>
        <div className="menu">
          <div className="menu-line"></div>
          <div className="menu-medium-line"></div>
          <div className="menu-line"></div>
        </div>
      </nav>
    );
  }
}

export default Header;
