'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getRecipeData } from "@/utils/recipe";
import { apiUrl, spaceKey, accessToken } from '@/constants/api';
import { RecipeParams, RecipeProps } from "@/types/types";

const Recipe = ({params}: {params: RecipeParams}) => {
  const [recipe, setRecipe] = useState<RecipeProps>();
  const { id } = params;

  useEffect(()=>{
    fetchRecipe();
  }, [id]);

  const fetchRecipe = async () => {
    try {
      const response = await fetch(`${apiUrl}/spaces/${spaceKey}/entries?sys.id=${id}&access_token=${accessToken}`);
      const data = await response.json();
      if (response.ok && data) {
        const formattedRecipe = getRecipeData(data);
        setRecipe(formattedRecipe);
      } else {
        toast.error('Recipe can not be loaded');
      }
    } catch(error) {
      toast.error('Error occurred');
      console.error('Error occurred:', error);
    } 
  }

  return (
    <section>
      {recipe ? (
        <div>
          <Image 
            src={recipe.photo.url}
            alt={recipe.photo.title}
            width={600}
            height={320} 
            priority={true}
          />
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          {recipe.tags && (
            <div>
              {recipe.tags.map((tag: any) => (
                <div key={tag.sys.id}>{tag.fields.name}</div>
              ))}
            </div>
          )}
          <div>
              {recipe.chef}
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
      <ToastContainer hideProgressBar={true} />
    </section>
  )
}

export default Recipe;