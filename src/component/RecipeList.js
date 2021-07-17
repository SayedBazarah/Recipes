import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {Link} from 'gatsby'
import slugify from 'slugify'

const RecipeList = ({recipe}) => {
 return (
  <section className='recipes-list'>
   { recipe.map((rcp, index) => {
    const {title, primaryImage, prep, cook } = rcp
    const imageDirection = getImage(primaryImage)
    const slug = slugify(title,{lower: true})
    return (
    <Link key={index} to={`/${slug}`}>
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
