import { useState } from 'react'
import "./assets/css/main.css"
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home"
import Navbar from "./components/navbar"
import Shop  from './pages/Shop';
import AboutUs from './pages/About-us';
import ProductDetail from './pages/product-detail';
import Cart from './pages/Cart';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App





