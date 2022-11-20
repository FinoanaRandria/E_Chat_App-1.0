import { useState } from 'react'
import{BrowserRouter,Routes,Route,Link,useNavigate} from "react-router-dom"
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Navbar/>
       <Routes>
        <Route path='/home' element={
          <Home/>
        }>

        </Route>
       </Routes>
      
      
    </div>
  )
}

export default App
