import { useState } from 'react'
import "./assets/css/main.css"
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home"
import Navbar from "./components/navbar"
import Footer from './components/footer';
import Shop from './pages/Shop';
import AboutUs from './pages/About-us';
import ProductDetail from './pages/product-detail';
import Cart from './pages/Cart';
import { createContext } from 'react';


export const countContext = createContext()

function App() {
  const [count, setCount] = useState(0)
  return (
    <countContext.Provider value={{count, setCount}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </countContext.Provider>
  );
}

export default App





