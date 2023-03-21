import logo from './logo.png';
import "./App.css"
import React from 'react'
import Nav from './components/Nav';
import Header from './components/header/Header';
import About from './components/about/About';

const App = () => {
  return (
    <div className='col-8'>
      <Nav/>
      <Header/>
      <About/>
    </div>
  )
}

export default App