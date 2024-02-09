import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Layout/Header';
import Home from './components/home/Home';
import Footer from './components/Layout/Footer';
import Menu from './components/home/Menu';
import About from './components/about/About';
import Login from './components/login/Login';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import Orders from './components/MyOrders/Orders';
import OrderDetails from './components/MyOrders/OrderDetails';

import './styles/header.scss'
import './styles/home.scss'
import './styles/footer.scss'
import './styles/dropDownMenu.scss'
import './styles/menu.scss'
import './styles/card.scss'
import './styles/about.scss'
import './styles/login.scss'
import './styles/contact.scss'
import './styles/cart.scss'
import './styles/shipping.scss'
import './styles/orders.scss'
import './styles/orderDetails.scss'

function App() {
  return (
    <Router>
      <Header isAuthenticated = {true}/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/order' element={<Cart />} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/details' element={<OrderDetails />} />
      
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
