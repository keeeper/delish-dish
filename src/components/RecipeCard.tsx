import Link from "next/link";
import Image from "next/image";
import { RecipeCardProps } from "@/types/types";

const RecipeCard:React.FC<RecipeCardProps> = ({id, title, photo}) => {
  return (
    <Link href={`recipes/${id}`}>
      <p>{title}</p>
      <Image src={photo.url} alt={photo.title} width={400} height={280}/>
    </Link>
    
  )
}
export default RecipeCard