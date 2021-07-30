import React from 'react'

import { Preview } from './components/Preview'
import { ControlPanel } from './components/ControlPanel'

import './App.scss'

function App() {
  return (
    <div className="App">
      <h1>Alpaca Image Generator</h1>
      <div className="main-container">
        <Preview />
        <ControlPanel />
      </div>
    </div>
  )
}

export default App
