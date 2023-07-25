import RecipeCard from '@/components/RecipeCard';
import { createRecipesArray } from '@/utils/recipe';
import { apiUrl, spaceKey, accessToken } from '@/constants/api';
import { RecipeCardProps } from '@/types/types';

async function fetchRecipes() {
    const url = `${apiUrl}/spaces/${spaceKey}/entries?content_type=recipe&access_token=${accessToken}&select=fields.title,fields.photo,sys.id`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
}

export default async function Home() {
  const data = await fetchRecipes();
  const recipes = createRecipesArray(data);

  return (
    <section className="max-w-[1024px] w-full mx-auto sm:rounded-2xl bg-white p-4 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {!!recipes && recipes?.map((recipe: RecipeCardProps) => (
            <RecipeCard key={recipe.id} {...recipe}/>
          )
        )}
      </div>
    </section>
  )
}
