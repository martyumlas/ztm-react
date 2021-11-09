import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='hats' element={<HatsPage/>}/>
    </Routes>
  );
}

export default App;
