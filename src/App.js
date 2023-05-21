// eslint-disable-next-line

import React from 'react';

import { About,Footer,Header,Skills,Testimonial,Work,Contact } from './container';

import { Navbar } from './components';

import './App.css';

const App = () => {
  return (
   <div className="app">
   <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Contact />
    <Footer />
   </div>
  );
}


export default App;