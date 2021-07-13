import React from 'react'
import {Link} from 'gatsby'
import handleTags from '../utlils/handleTags'

const TagsList = ({recipe}) => {
 const tagsList =  handleTags(recipe)
 return (
  <div>
   <h4>Recipes</h4>
<div className="tags-list" >
   {
     tagsList.map((value, index)=>{
       const tag = value.tag
       const repeat = value.repeat
       return <Link  to='/' key={index}>{tag} ({repeat})</Link>
     })
   }
   </div>
   </div>
 )
}

export default TagsList
