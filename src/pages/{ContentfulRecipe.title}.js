import React from 'react'
import {graphql, Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layer from '../component/Layout'
import slugify from 'slugify'
const RecipeTemplate = ({data}) => {
  const dataObj = data.allContentfulRecipe.nodes
  const {title, prep, cook, service, shortDescription, primaryImage, content} = dataObj[0]
  const imageDir = getImage(primaryImage)
  const { ingredients, instructions, tools} = content
  console.log(instructions)

 return (
  <Layer>
    <div className="recipe-page page">
   <div className="recipe-hero">
     <div className="recipe-img">
     <GatsbyImage alt={title} image={imageDir} className='recipe-img'/>
      </div>
      <div className="recipe-description">
        <h2>{title}</h2>
        <p>{shortDescription.shortDescription}</p>
        <div>
          <div className="recipe-time">
            <h5>Prep Time</h5>
            <p>{prep} min.</p>
          </div>
          <div className="recipe-time">
            <h5>Cook Time</h5>
            <p>{cook} min.</p>
          </div>
          <div className="recipe-time">
            <h5>Serving</h5>
            <p>{service}.</p>
          </div>
        </div>
        <div className="recipe-tags">
          <p>Tags: {content.tags.map((value,index) => {
            const tag=slugify(value,{ lower: true })
            return <Link 
            to={`/${tag}`}className='tag' key={index}>{value}</Link>
          })}</p>
        </div>
      </div>
   </div>
  <div className="recipe-inst">
    <div className="instructions">
      <h4>Instructions</h4>
      { instructions.map((instruction, index) => {
        return (
          <div key={index}>
            <div className='instruction-step'><h5>STEP {index +1}</h5><hr/></div>
            <p>{instruction}</p>
          </div>
        )
      })}
    </div>

      <div className="instructions-reset">
      <h4>Ingredients</h4>
      {
      ingredients.map((ingredient, index)=>{
        return(
          <p key={index} className="border-bottom">{ingredient}</p>
        )
      })}
      <h4>Tools</h4>
      {tools.map((tool,index) => {
        return <p key={index} className="border-bottom tools">{tool}</p>
      })}
      </div>

  </div>
  </div>
  </Layer>
 )
}

export const query = graphql`
  query getRecipe($title: String) {
  allContentfulRecipe(filter: {title: {eq: $title}}) {
    nodes {
      title
      shortDescription {
        shortDescription
      }
      service
      prep
      id
      cook
      primaryImage {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
      content {
        tags
        instructions
        ingredients
        tools
      }
    }
  }
}
`

export default RecipeTemplate
