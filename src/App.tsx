import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from "./Pages/Player"
import Connect from "./Pages/Connect"
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/1' element={<Player />} />
        <Route index element={<Connect />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
