import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/header/Header";
import Home from './components/home/Home';
import Cart from './components/cart/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
