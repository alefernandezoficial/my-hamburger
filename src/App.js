import './App.css';

import React, { useState } from 'react';

import Navbar from './component/Navbar';
import Header from './component/Header';
import Banner from './component/Banner';
import Intro from './component/Intro';
import Footer from './component/Footer';
import About from './component/About';
import Product from './component/Product';

function App() {

  return (
    <>
      <Navbar></Navbar>

      <Header></Header>

      <Banner></Banner>

      <Intro></Intro>
      
      <Product></Product>

      <About></About>

      <Footer></Footer>

    </>
  );
}

export default App;
