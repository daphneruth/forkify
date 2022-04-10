import { async } from 'regenerator-runtime';
import { getJSON } from './helpers.js';
import { API_URL } from './config.js';
import { search } from 'core-js/fn/symbol';
 export const view = {
    recipe: {},
    search: {
        query: '',
        results: []
    },
};

export const loadRecipe = async function(id){
    try{
        const data = await getJSON(`${API_URL}/${id}>`);
    
    
    const { recipe } = data.data;

   // let (recipe) = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.sourceUrl,
      Image: recipe.Image_url,
      serving: recipe.serving,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }

    console.log(recipe)

} catch(err){
    console.log(err);
    throw err;
}
}
export const loadSearchResults = async function (query) {
    try{
 const data = await JSON (`${API_URL}?search =${query}`)
 console.log(data);
 data.data.recipe.map(rec =>{
     return {
     id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.sourceUrl,
      Image: recipe.Image_url
     }
 })
    }catch(err)
    {
        console.log(err);
        throw err;
       
    }
}
loadSearchResults('pizza')
