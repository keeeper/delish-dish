import Link from "next/link";
import Image from "next/image";
import { RecipeCardProps } from "@/types/types";

const RecipeCard:React.FC<RecipeCardProps> = ({_id, title, photo}) => {
  return (
    <Link className="relative rounded-xl overflow-hidden group" href={`recipes/${_id}`}>
      <Image 
        src={photo?.url || ""}
        alt={photo?.title || ""}
        width={468}
        height={312}
        className="bg-theme-primaryTransparent-clr w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-40% to-transparent to-50% opacity-60 group-hover:opacity-0 transition"></div>
      <h4 className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-white text-xl sm:text-2xl font-bold group-hover:translate-y-[100px] transition ease-in-out duration-150">{title}</h4>
    </Link>
  )
}

export default RecipeCard;