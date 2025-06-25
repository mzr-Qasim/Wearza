import { useState } from 'react'
import "./assets/css/main.css"
import 'react-inner-image-zoom/lib/styles.min.css';
import 'react-medium-image-zoom/dist/styles.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home"
import Navbar from "./components/navbar"
import Footer from './components/footer';
import Shop from './pages/Shop';
import AboutUs from './pages/About-us';
import LookBook from './pages/Lookbook';
import ProductDetail from './pages/product-detail';
import Cart from './pages/Cart';
import { createContext } from 'react';
import { useEffect } from 'react';



export const CartContext = createContext()

function App() {
  const [cart, setCart] = useState([])

  useEffect(()=>{ 
    const cartFromStorage = JSON.parse(localStorage.getItem('cart'))
    setCart(cartFromStorage || [])
    
  }, [])


  useEffect(()=> {
    if(cart.length){
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart])


  return (
    <CartContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/lookbook" element={<LookBook />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App





