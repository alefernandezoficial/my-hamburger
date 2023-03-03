import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Product from './component/Product';

import Navbar from './component/Navbar';
import Header from './component/Header';
import Banner from './component/Banner';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div>
              <header id="header">
                <Navbar />
                <Header />
                <Banner />
              </header>
              <Home />
              <About />
              <Contact />
              <Product />
            </div>
          } />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Product' element={<Product />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
