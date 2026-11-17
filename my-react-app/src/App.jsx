import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import viteLogo from '/vite.svg'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  )
}

export default App
