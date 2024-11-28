import React from 'react'
import Navbar from './components/navBar/NavBar'
import TheGrid from './components/grid/TheGrid'
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <TheGrid />
      </div>
    </div>
  )
}

export default App
