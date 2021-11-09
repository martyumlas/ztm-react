import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop'
import Header  from './components/header/Header';
import Auth from './pages/auth/Auth';

function App() {
  return (
    <Fragment>
    <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='signin' element={<Auth/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
