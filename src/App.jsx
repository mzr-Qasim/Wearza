import { useState } from 'react'
import "./assets/css/main.css"
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home"
import {Navbar} from "./components/navbar"
import Shop  from './pages/Shop';
import AboutUs from './pages/About-us';
import ProductDetail from './pages/product-detail';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App





