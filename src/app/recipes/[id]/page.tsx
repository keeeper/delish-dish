import Image from "next/image";
import Tag from "@/app/components/Tag";
import Chef from "@/app/components/Chef";
import Description from '@/app/components/Description';
import Review from "@/app/components/Review";
import { RecipeParams, RecipeProps } from "@/types/types";
import { getRecipe } from "@/utils/getData";

export default async function Recipe({params}: {params: RecipeParams}) {
  const { id } = params;

  const recipe:RecipeProps = await getRecipe(id);
  
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
          <div className="p-4 sm:p-6">
            <header className="flex justify-between items-start flex-col sm:flex-row">
              <h1 className="grow shrink text-xl sm:text-2xl font-bold text-text-primary-clr">{recipe.title}</h1>
              <div className="grow-0 shrink flex items-center min-w-[90px] mt-2 sm:ml-6 sm:mt-0">
                <Image src="/star.svg" alt="Rating" width={32} height={32} />
                <span>4.5</span>
                <span className="ml-1 text-text-secondary-clr">(246)</span>
              </div>
            </header>
            {!!recipe?.tags && (
              <div className="mt-4">
                {recipe?.tags.map((tag: any) => (
                  <Tag key={tag.name} name={tag.name}/>
                ))}
              </div>
            )}
            {recipe.description && (
              <Description text={recipe.description}/>
            )}
            {recipe.chef && (
              <Chef name={recipe.chef} />
            )}
            <Review />
          </div>
        </div>
      )}
    </section>
  )
}
