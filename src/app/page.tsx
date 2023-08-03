import RecipeCard from '@/app/components/RecipeCard';
import { RecipeCardProps } from '@/types/types';
import  { getAllRecipes } from "@/utils/getData";

export default async function Home() {
  const recipes = await getAllRecipes();

  return (
    <section className="max-w-[1024px] w-full mx-auto sm:rounded-2xl bg-white p-4 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {recipes?.map((recipe: RecipeCardProps) => (
            <RecipeCard key={recipe._id} recipe={recipe}/>
          )
        )}
      </div>
    </section>
  )
}
