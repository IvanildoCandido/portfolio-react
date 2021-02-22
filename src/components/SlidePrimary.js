import React, { Component } from 'react';
import '../styles/slidePrimary.css';

class SlidePrimary extends Component {
  render() {
    const { title, subtitle, description } = this.props;
    return (
      <div className="slide-area">
        <h1>
          {title}
          <br />
          <span>{subtitle}</span>
        </h1>
        <h2>{description}</h2>
        <a href="#home">Mais Detalhes</a>
      </div>
    );
  }
}

export default SlidePrimary;
