import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Layout/Header';
import Home from './components/home/Home';
import Footer from './components/Layout/Footer';
import Menu from './components/home/Menu';
import About from './components/about/About';
import Login from './components/login/Login';

import './styles/header.scss'
import './styles/home.scss'
import './styles/footer.scss'
import './styles/dropDownMenu.scss'
import './styles/Menu.scss'
import './styles/card.scss'
import './styles/about.scss'
import './styles/login.scss'

function App() {
  return (
    <Router>
      <Header isAuthenticated = {true}/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
