import React from 'react'
import Navbar from './Navbar/Navbar'
import { Footer } from './Footer/Footer'
import { Header } from './header/Header'
import AboutUs from './aboutUs/AboutUs'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default App;
