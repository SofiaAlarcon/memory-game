import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import {Route} from 'wouter';

function App() {
  
  return (
    <>
      <Route
      component= {Home}
      path="/" 
      />
      <Route 
      component={Game}
      path="/game"
      />
    </>  
  )
}

export default App
