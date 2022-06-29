import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sobre from './components/Sobre';

const App = () => {
  return (

<div>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="sobre" element={<Sobre/>} />
      <Route component={() => <div>Error 404!</div>} />
    </Routes>
</div>

  );
}

export default App;