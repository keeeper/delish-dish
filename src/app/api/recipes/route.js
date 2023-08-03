import { connectToDB } from "@/utils/database";
import Recipe from "@/models/recipe";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
  
    const recipes = await Recipe.find();

    if (!recipes || recipes.length === 0) return new Response("Recipe not found", {status: 404});
    
    return new Response(JSON.stringify(recipes), {status: 200})
  } catch(error) {
    console.log(error);
    return new Response("Failed to retrieve recipes", {status: 500});
  }
}