import React from 'react'

const Footer = () => {
 return (
  <footer>
   &copy; {new Date().getFullYear().toString()} All Right Reserve to {" "}<a href="/">Recipe</a>, Powered By{" "} <a href="gatsby.com">Gatsby</a>
  </footer>
 )
}

export default Footer
