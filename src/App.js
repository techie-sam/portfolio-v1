import logo from './logo.png';
import "./App.css"
import React from 'react'
import Nav from './components/Nav';
import Home from './components/header/Header';
import About from './components/about/About';

const App = () => {
  return (
    <>
      <Nav/>
      <Home/>
      <About/>
    </>
  )
}

export default App