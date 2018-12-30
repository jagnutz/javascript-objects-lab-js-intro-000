var recipes = {key: value}

function updateObjectWithKeyAndValue (recipes,key,value) {
 recipes[key] = value
  return recipes
}

function updateObjectWithKeyAndValue (recipes,key,value){
  const newRecipes = Object.assign({},recipes,{[key]:value})
  delete newRecipes[key]
  return newRecipes
}
