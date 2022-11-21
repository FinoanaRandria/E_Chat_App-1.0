import { useState } from 'react'
import{BrowserRouter,Routes,Route,Link,useNavigate} from "react-router-dom"
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Profile from "./components/porfile/profile"
import Apropos from "./components/a propos/a propos"
import Echat from "./components/e-chat/e-chat"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Navbar/>
       <Routes>
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
      
      
    </div>
  )
}

export default App
