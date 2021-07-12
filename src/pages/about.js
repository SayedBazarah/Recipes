import React from 'react'
import Layout from '../component/Layout'
import {StaticImage} from 'gatsby-plugin-image'

const About = () => {
 return (
  <div>
   <Layout>
     <div className="page">
      <div className='about-hero'>
        <article className="about">
          <h2>I'm baby coloring book poke taxidermy</h2>
          <p>Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.</p>
          <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
          <div className="btn"><a href="/contact">Contact</a></div>
        </article>
        <StaticImage src='../assets/images/about.jpeg'
        alt='Cheif sprate the salat'
        className='about-img'
        placeholder='tracedSVG'/>
        
      </div>
      </div>
    </Layout>
  </div>
 )
}

export default About