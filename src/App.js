import './App.css';
import './config/server';

import React, { useState } from 'react';

import Navbar from './component/Navbar';
import Header from './component/Header';
import Banner from './component/Banner';

import Intro from './component/Intro';
import About from './component/About';
import Contact from './component/Contact';
import Product from './component/Product';

import Footer from './component/Footer';

function App() {

  return (
    <div><header id="header">
      <Navbar />
      <Header />
      <Banner />

      <Intro />

      <About />
      
      <Contact />

      <Product />
      
      <Footer />
</header>
    </div>
  );
}

export default App;
