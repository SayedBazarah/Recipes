const handleTags = recipe => {
 const Tags = {}
 const sortTags = []
 recipe.forEach(item => {
  const tag = item.content.tags
 tag.forEach( tag => {
  Tags[tag] = (Tags[tag] || 0) + 1;
 })
 });
 Object.keys(Tags)
      .sort()
      .forEach(function(v,i) {
          sortTags[i] = { tag: v ,repeat: Tags[v]};
       });
 return sortTags
}

export default handleTags;