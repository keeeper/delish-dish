'use client';

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RecipeCard from '@/components/RecipeCard';
import { createRecipesArray } from '@/utils/recipe';
import { apiUrl, spaceKey, accessToken } from '@/constants/api';
import { RecipeCardProps } from '@/types/types';

export default function Home() {
  const [recipes, setRecipes] = useState<RecipeCardProps[]>();

  useEffect(()=>{
   fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`${apiUrl}/spaces/${spaceKey}/entries?content_type=recipe&access_token=${accessToken}&select=fields.title,fields.photo,sys.id`);
      const data = await response.json();
      if (response.ok && data) {
        const recipesArray = createRecipesArray(data);
        setRecipes(recipesArray)
      } else {
        toast.error('Recipes can not be loaded');
      }
    } catch(error) {
      toast.error('Error occurred');
      console.error('Error occurred:', error);
    }
  }

  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      {!!recipes && recipes?.map((recipe: RecipeCardProps) => (
          <RecipeCard key={recipe.id} {...recipe}/>
        )
      )}
      <ToastContainer hideProgressBar={true} />
    </section>
  )
}
