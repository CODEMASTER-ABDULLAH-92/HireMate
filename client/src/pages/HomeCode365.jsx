import React from 'react'
import SearchSection from "../Component/SearchBar"
import Learn from '../Component/Learn'
import Connect from '../Component/Connect'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import NavbarCode365 from '../Component/NavbarCode365'
const Home = () => {
  return (
    <div>
      <NavbarCode365/>
      <SearchSection />
      <Learn />
      <Connect />
      <Footer/>
    </div>
  )
}

export default Home
