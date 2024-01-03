import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Layout/Header';
import Home from './components/home/Home';

import './styles/header.scss'
import './styles/home.scss'

function App() {
  return (
    <Router>
      <Header isAuthenticated = {true}/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
