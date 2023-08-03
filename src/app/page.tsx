import RecipeCard from '@/components/RecipeCard';
import { RecipeCardProps } from '@/types/types';
import  { getAllRecipes } from "@/utils/recipes";

// async function fetchRecipes() {
//   const url = `/api/recipes/`;
//   const response = await fetch(url, { cache: 'no-store' });
//   if (!response.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return response.json();
// }

export default async function Home() {
  // const recipes = await fetchRecipes();
  const recipes = await getAllRecipes();

  return (
    <section className="max-w-[1024px] w-full mx-auto sm:rounded-2xl bg-white p-4 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {!!recipes && recipes?.map((recipe: RecipeCardProps) => (
            <RecipeCard key={recipe._id} {...recipe}/>
          )
        )}
      </div>
    </section>
  )
}
