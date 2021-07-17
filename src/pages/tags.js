import React from 'react'
import Layout from '../component/Layout'
import {graphql, Link} from 'gatsby'
import handleTags from '../utlils/handleTags'

const Tags = ({data}) => {
  const value = handleTags(data.allContentfulRecipe.nodes)

 return (
  
   <Layout >
     <div className='page'>
       <div className="tag-page">
       {
         value.map((value, index) => {
           return ( <Link to='/' key={index} className="tag-item">
            <h5>{value.tag}</h5>
            <p>{value.repeat} recipe</p>
          </Link>
           )})
       }
      </div>
      </div>
    </Layout>
 )
}

export const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
