var recipes = {}

function updateObjectWithKeyAndValue (recipes,key,value) {
 recipes[key] = value
  return recipes
}



function updateObjectWithKeyAndValue2 (recipes,key,value) {
var newRecipes = Object.assign({},recipes,{[key]:value})
  delete newRecipes[key]
  return newRecipes
}
