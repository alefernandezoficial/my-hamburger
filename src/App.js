import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

// Pages y contenidos
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Product from './component/pages/Product';

// Estructura y navegacion
import Navbar from './component/Navbar';
import Header from './component/Header';
import Banner from './component/Banner';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <HashRouter basename='/'>
        <Navbar />
        <section id="header"><Header /></section>
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <About />
        <Contact />
        <Product />
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
