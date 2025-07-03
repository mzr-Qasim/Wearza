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
import Login from './pages/Login';
import Create_Account from './pages/Create-Account';
import ProductDetail from './pages/product-detail';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import { createContext } from 'react';
import { useEffect } from 'react';



export const ShopContext = createContext()

function App() {
  const [cart, setCart] = useState(()=>{
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : [];
  })

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
    <ShopContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<Create_Account />} />
          <Route path="/lookbook" element={<LookBook />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ShopContext.Provider>
  );
}

export default App





