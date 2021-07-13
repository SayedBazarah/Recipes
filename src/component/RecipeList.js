import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {Link} from 'gatsby'
const RecipeList = ({recipe}) => {
 return (
  <section className='recipes-list'>
   { recipe.map((rcp, index) => {
    const {title, primaryImage, prep, cook } = rcp
    const imageDirection = getImage(primaryImage)
    return (
    <Link key={index} to='/'>
     <GatsbyImage className='recipe-img' image={imageDirection} alt={title} />
     <h5>{title}</h5>
     <div>
      <p>Prep: {prep}min | Cook: {cook}min</p>
     </div>
    </Link>
   )
   }
   )}
  </section>
 )
}

export default RecipeList
