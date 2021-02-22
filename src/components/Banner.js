import React, { Component } from 'react';
import '../styles/banner.css';
import SlidePrimary from './SlidePrimary';

class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <div className="sliders">
          <div className="slide">
            <SlidePrimary title="Titulo" subtitle="subtitle" description="description" />
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
