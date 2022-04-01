import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar/navbar'
import Home from './Components/Home/Home'
import Page3 from "./Components/page3/pa3"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Page3/>
    </div>
  )
}

export default App
