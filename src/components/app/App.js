import React, { Component } from 'react'
import './App.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Content from '../../components/content/Content';


class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App

