import React, { Component } from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
      </div>
    );
  }
}

export default Home;
