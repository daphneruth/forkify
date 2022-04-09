import { async } from 'regenerator-runtime';
import { getJSON } from './helpers.js';
import { API_URL } from './config.js';
 export const view = {
    recipe: {}
};

export const loadRecipe = async function(id){
    try{
    const res = await fetch(
        `${API_URL}/${id}>`
    );
    const data = await res.json();

    if (res.ok) throw new Error(`${data.message} (${res.status})`);
      
    
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
    alert(err);
}
}

