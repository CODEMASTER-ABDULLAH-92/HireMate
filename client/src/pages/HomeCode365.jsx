import React from 'react'
import SearchSection from '../component/SearchBar'
import Learn from '../component/Learn'
import Connect from '../component/Connect'
import Footer from '../component/Footer'
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
