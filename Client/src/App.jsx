import { useState } from 'react'
import{BrowserRouter,Routes,Route,Link,useNavigate} from "react-router-dom"
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Profile from "./components/porfile/profile"
import Apropos from "./components/a propos/a propos"
import Echat from "./components/e-chat/e-chat"
import {AnimatePresence} from "framer-motion"
import { useLocation } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  const location = useLocation()
  return (
    <div className="App">
        <Navbar/>
        <AnimatePresence mode='wait' initial={false}>
             
          <Routes location={location} key={location.pathname} >
        <Route path='/' element={
          <Home/>
        }>

        </Route>
        
        <Route path='/E-chat' element={
          <Echat/>
        }>

        </Route>
        <Route path='/Profile' element={
          <Profile/>
        }>

        </Route>

        <Route path='/A propos' element={
          <Apropos/>
        }>

        </Route>
       </Routes>
        </AnimatePresence>
       
      
      
    </div>
  )
}

export default App
