import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import TagsList from './TagsList'
import RecipeList from './RecipeList'

const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        prep
        cook
        service
        shortDescription {
          shortDescription
        }
        content {
          tags
          ingredients
          instructions
        }
        primaryImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
 const data = useStaticQuery(query)
 const node = data.allContentfulRecipe.nodes
 return (
  <div className='all-recipes'>
   <TagsList recipe={node} />
   <RecipeList recipe={node} />
  </div>
 )
}



export default AllRecipes
