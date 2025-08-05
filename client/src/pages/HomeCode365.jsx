import React from 'react'
import SearchSection from "../Component/SearchBar"
import Learn from '../Component/Learn'
import Connect from '../Component/Connect'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import NavbarCode365 from '../Component/NavbarCode365'
import BackgroundGradient from '../Component/Code365/BackgroundGradient'
const Home = () => {
  return (
    <div className='relative'>
      <div className='absolute  -top-64 opacity-50 min-w-full h-full -right-32 overflow-hidden '>
      <BackgroundGradient/>
      </div>
      <NavbarCode365/>
      <SearchSection />
      <Learn />
      <Connect />
      <div className='absolute bottom-0 overflow-hidden '>
      <BackgroundGradient/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
