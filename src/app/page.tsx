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
    <section className="max-w-[1024px] w-full mx-auto sm:rounded-2xl bg-white p-4 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {!!recipes && recipes?.map((recipe: RecipeCardProps) => (
            <RecipeCard key={recipe.id} {...recipe}/>
          )
        )}
      </div>
      <ToastContainer hideProgressBar={true} />
    </section>
  )
}
