import Link from "next/link";
import Image from "next/image";
import { RecipeCardProps } from "@/types/types";

const RecipeCard:React.FC<RecipeCardProps> = ({id, title, photo}) => {
  return (
    <Link className="relative rounded-xl overflow-hidden group" href={`recipes/${id}`}>
      <Image src={photo?.url || ""} alt={photo?.title || ""} width={600} height={360}/>
      <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-10 transition"></div>
      <h4 className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-white text-xl sm:text-2xl font-bold group-hover:translate-y-[100px] transition">{title}</h4>
    </Link>
    
  )
}

export default RecipeCard;