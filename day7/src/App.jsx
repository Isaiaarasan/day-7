import React from 'react';
import About from './Components/FunctionalComponent/About';
import Gallery from './Components/FunctionalComponent/Gallery';
import Home from './Components/FunctionalComponent/Home';
import Contact from './Components/FunctionalComponent/Contact';
import Navbar from './Components/FunctionalComponent/Navbar';
import Signup from './Components/FunctionalComponent/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery page="Gallery" img="SECE Logo" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
