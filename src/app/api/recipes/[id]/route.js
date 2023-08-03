import { connectToDB } from "@/utils/database";
import Recipe from "@/models/recipe";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
  
    const recipe = await Recipe.findById(params.id);

    if (!recipe) return new Response("Recipe not found", {status: 404});
    
    return new Response(JSON.stringify(recipe), {status: 200})
  } catch(error) {
    console.log(error);
    return new Response("Failed to retrieve recipes", {status: 500});
  }
}