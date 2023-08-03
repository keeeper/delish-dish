import { connectToDB } from "@/utils/database";
import Recipe from "@/models/recipe";

export const getAllRecipes = async () => {
  try {
    await connectToDB();
  
    const recipes = await Recipe.find();

    if (!recipes || recipes.length === 0) console.log("Recipes can not be fetched");

    return recipes;
  } catch(error) {
    console.log(error);
  }
}

export const getRecipe = async (id) => {
  try {
    await connectToDB();
  
    const recipe = await Recipe.findById(id);

    if (!recipe) console.log("Recipe can not be fetched");
    return recipe;
  } catch(error) {
    console.log(error);
  }
}