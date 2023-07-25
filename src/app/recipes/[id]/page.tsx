'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tag from "@/components/Tag";
import Chef from "@/components/Chef";
import Description from '@/components/Description';
import { getRecipeData } from "@/utils/recipe";
import { apiUrl, spaceKey, accessToken } from '@/constants/api';
import { RecipeParams, RecipeProps } from "@/types/types";

const Recipe = ({params}: {params: RecipeParams}) => {
  const [recipe, setRecipe] = useState<RecipeProps>();
  const { id } = params;

  useEffect(() => {
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
    <section className="max-w-[640px] w-full mx-auto sm:rounded-2xl bg-white overflow-hidden">
      {!!recipe && (
        <div>
          <Image 
            src={recipe?.photo?.url || ""}
            alt={recipe?.photo?.title || ""}
            width={640}
            height={420} 
            priority={true}
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold text-text-clr-primary">{recipe.title}</h1>
            {recipe.tags && (
              <div className="mt-4">
                {recipe.tags.map((tag: any) => (
                  <Tag key={tag.sys.id} name={tag.fields.name}/>
                ))}
              </div>
            )}
            {recipe.description && (
              <Description text={recipe.description}/>
            )}
            {recipe.chef && (
              <Chef name={recipe.chef} />
            )}
          </div>
        </div>
      )}
      <ToastContainer hideProgressBar={true} />
    </section>
  )
}

export default Recipe;