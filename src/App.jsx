import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import {Route} from 'wouter';
import GameStateProvider from './context/GameStateProvider';

function App() {
  
  return (
   <>
      <Route
        component= {Home}
        path="/" 
      />
      <GameStateProvider>
        <Route 
        component={Game}
        path="/game"
        />
      </GameStateProvider> 
    </>
  )
}

export default App
