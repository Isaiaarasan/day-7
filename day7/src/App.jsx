import React from 'react';
import About from './Components/FunctionalComponent/About';
import Gallery from './Components/FunctionalComponent/Gallery';
import Home from './Components/FunctionalComponent/Home';
import Contact from './Components/FunctionalComponent/Contact';
import Navbar from './Components/FunctionalComponent/Navbar';
import Signup from './Components/FunctionalComponent/Signup';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UseState from './Components/FunctionalComponent/Hooks/UseState';
import UseEffect from './Components/FunctionalComponent/Hooks/UseEffect';
import UseEffectApi from './Components/FunctionalComponent/Hooks/UseEffectAPI'; 
import UseEffectAPIimage from './Components/FunctionalComponent/Hooks/UseEffectApIimage';
import UseRef from './Components/FunctionalComponent/Hooks/UseRef';
import UseMemo from './Components/FunctionalComponent/Hooks/UseMemo';
import UseCallback from './Components/FunctionalComponent/Hooks/UseCallback';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery page="Gallery" img="SECE Logo" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/useeffectapi" element={<UseEffectApi />} />
        <Route path="/useimg" element={<UseEffectAPIimage/>} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/usememo" element={<UseMemo />} />
        <Route path="/usecallback" element={<UseCallback />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
