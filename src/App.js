import logo from './logo.png';
import "./App.css"
import React from 'react'
import Nav from './components/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <>
      <Nav/>
      <Header/>
      <About/>
      <Skills/>
    </>
  )
}

export default App