import React, { useState} from 'react'
import { Link } from 'gatsby'
import logo from '../assets/images/logo.svg'
const Navbar = () => {
 const [navState, setNavState ] = useState(false);
 return (
  <nav>
   <Link to='/' className="logo"><img src={logo} alt="logo"/></Link>
   <div role='menu' tabIndex={0} className="burger" onKeyDown ={() => setNavState(!navState)} onClick={() => setNavState(!navState)}>
    <div className="line-1"></div>
    <div className="line-2"></div>
    <div className="line-3"></div>
   </div>
   <div className={navState ? "links" : 'links-desktop'}>
    <div className="nav-links">
     <Link to='/' activeStyle={{color: '#645cff'}} >Home</Link>
     <Link to='/recipes' activeStyle={{color: '#645cff'}} >Recipes</Link>
     <Link to='/tags' activeStyle={{color: '#645cff'}} >Tags</Link>
     <Link to='/about' activeStyle={{color: '#645cff'}} >About</Link>
    </div>
    <div className="btn"><a href="/contact">Contact</a></div>
   </div>
  </nav>
 )
}

export default Navbar
