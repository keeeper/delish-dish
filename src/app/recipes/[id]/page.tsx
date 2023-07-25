import Image from "next/image";
import Tag from "@/components/Tag";
import Chef from "@/components/Chef";
import Description from '@/components/Description';
import { getRecipeData } from "@/utils/recipe";
import { apiUrl, spaceKey, accessToken } from '@/constants/api';
import { RecipeParams, RecipeProps } from "@/types/types";

async function fetchRecipe (id: string) {
  const url = `${apiUrl}/spaces/${spaceKey}/entries?sys.id=${id}&access_token=${accessToken}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export default async function Recipe({params}: {params: RecipeParams}) {
  const { id } = params;
  const recipeData = await fetchRecipe(id);
  const recipe:RecipeProps = getRecipeData(recipeData);

  return (
    <section className="max-w-[640px] w-full mx-auto sm:rounded-2xl bg-white overflow-hidden">
      {!!recipe && (
        <div>
          <Image 
            src={recipe?.photo?.url || ""}
            alt={recipe?.photo?.title || ""}
            width={640}
            height={427} 
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
    </section>
  )
}
