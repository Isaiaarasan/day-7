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
import UseEffectAPIimage from './Components/FunctionalComponent/Hooks/UseEffectApIimage'
function App() {
  return (
  
      <BrowserRouter>
      <Navbar/>
      <Routes>

    <Route path="/Home" element={<Home />}></Route>
    <Route path="/About" element={<About />}></Route>
    <Route
    path="/gallery"
    element={<Gallery page="Gallery" img="SECE Logo"/>}
    ></Route>
    <Route path="/Contact" element={<Contact />}></Route>
    <Route path="/UseState" element={<UseState />}></Route> 
    <Route path="/Signup" element={<Signup />}></Route>
    <Route path="/UseEffect" element={<UseEffect />}></Route>
    <Route path="/UseEffectApi" element={<UseEffectApi />}></Route>
    </Routes>
    </BrowserRouter>
   
   
)
}

export default App;