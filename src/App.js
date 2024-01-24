import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Layout/Header';
import Home from './components/home/Home';
import Footer from './components/Layout/Footer';
import Menu from './components/home/Menu';

import './styles/header.scss'
import './styles/home.scss'
import './styles/footer.scss'
import './styles/dropDownMenu.scss'
import './styles/Menu.scss'
import './styles/card.scss'

function App() {
  return (
    <Router>
      <Header isAuthenticated = {true}/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
