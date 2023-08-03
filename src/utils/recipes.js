import { connectToDB } from "@/utils/database";
import Recipe from "@/models/recipe";

export const getAllRecipes = async () => {
  try {
    await connectToDB();
  
    const recipes = await Recipe.find();

    // if (!recipes || recipes.length === 0) return new Response("Recipe not found", {status: 404});
    
    return recipes;
  } catch(error) {
    console.log(error);
    // return new Response("Failed to retrieve recipes", {status: 500});
  }
}

export const getRecipe = async (id) => {
  try {
    await connectToDB();
  
    const recipe = await Recipe.findById(id);

    // if (!recipe) return new Response("Recipe not found", {status: 404});
    return recipe
    // return new Response(JSON.stringify(recipe), {status: 200})
  } catch(error) {
    console.log(error);
    // return new Response("Failed to retrieve recipes", {status: 500});
  }
}