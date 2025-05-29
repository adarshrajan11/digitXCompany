import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './page/Home'
import { Route, Routes } from 'react-router-dom'
import Service from './page/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/blog" element={<Home />} />
      </Routes>

      {/* <Home /> */}
    </>
  )
}

export default App
