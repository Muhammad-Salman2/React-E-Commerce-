import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import Firstpage from './first-page.jsx'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'


function App() {
  

  return (
    <>
      <div className='main'>
      <Firstpage/>
      <Navbar/>
      <Hero/>
      </div>
      
    </>
  )
}

export default App
