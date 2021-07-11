import React from 'react'
//Component
import Navbar from './Navbar'
import Footer from './Footer'
//Styles
import '../assets/css/main.css'

const Layout = ({children}) => {
 return (
  <div>
   <Navbar />
    {children}
   <Footer />
  </div>
 )
}

export default Layout
