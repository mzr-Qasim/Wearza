import { useState } from 'react'
import "./assets/css/main.css"
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home"
import {Navbar} from "./components/navbar"
import Shop  from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App





