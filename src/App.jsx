import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import Firstpage from './first-page.jsx'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Flashsale from './Components/Flashsale.jsx'
import Card from './Components/Cards.jsx'
import Catogary from './Components/Catogary.jsx'



function App() {
  

  return (
    <>
      <div className='main'>
      <Firstpage/>
      <Navbar/>
      <Hero/>
      <Flashsale/>
      <div className='card-main'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
          <div className="View-all-products">
                <button>View All Products</button>
          </div>
      </div>

      <Catogary/>
      
    </>
  )
}

export default App
