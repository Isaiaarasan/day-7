import React from 'react';
import About from './Components/FunctionalComponent/About'
import Gallery from './Components/FunctionalComponent/Gallery'
import Home from './Components/FunctionalComponent/Home'
import Contact from './Components/FunctionalComponent/Contact'
import Navbar from './Components/FunctionalComponent/Navbar'
import Signup from './Components/FunctionalComponent/Signup'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import UseState from './Components/FunctionalComponent/Hooks/UseState'
import UseEffect from './Components/FunctionalComponent/Hooks/UseEffect'
import UseEffectApi from './Components/FunctionalComponent/Hooks/UseEffectAPI'
import UseEffectAPIimage from './Components/FunctionalComponent/Hooks/UseEffectAPIimage'
import UseRef from './Components/FunctionalComponent/Hooks/UseRef'
import UseMemo from './Components/FunctionalComponent/Hooks/UseMemo'
import UseCallback from './Components/FunctionalComponent/Hooks/UseCallback'

function App() {
  return (   
      <BrowserRouter>
      <Navbar/>
      <Routes>

    <Route path="/home" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/gallery" element={<Gallery page="Gallery" img="SECE Logo"/>}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/usestate" element={<UseState />}></Route> 
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/useeffect" element={<UseEffect />}></Route>
    <Route path="/useeffectapi" element={<UseEffectApi />}></Route>
    <Route path="/useimg" element={<UseEffectAPIimage/>}></Route>
    <Route path="/useref" element={<UseRef/>}></Route>
    <Route path="/usememo" element={<UseMemo/>}></Route>
    <Route path="/usecallback" element={<UseCallback/>}></Route>
    </Routes>
    </BrowserRouter>
   

)
}

export default App;