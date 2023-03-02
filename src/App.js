import './App.css';

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
    <div>
      <Navbar />
      <Header />
      <Banner />

      <Intro />
      
      <Product />

      <About />
      
      <Contact />
      
      <Footer />

    </div>
  );
}

export default App;
