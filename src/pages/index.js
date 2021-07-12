import React from 'react'
import Layout from '../component/Layout'
import { StaticImage } from 'gatsby-plugin-image'
const Index = () => {
  return (
    <Layout>
    <div className="page">
      <section className="hero">
        <StaticImage src='../assets/images/main.jpeg'
        alt='Recipe'
        placeholder='tracedSVG'
        className='hero-img'
        layout='fullWidth'
        />
        <div className="hero-text">
          <h1>Simply Recipes</h1>
          <h4>No Fluff, Just Recipes</h4>
        </div>
      </section>
    </div>
    </Layout>
  )
}

export default Index;