import Image from "next/image";
import { RecipeChefProps } from "@/types/types";


const Chef:React.FC<RecipeChefProps> = ({name, imageUrl}) => {
  return (
    <div className="flex items-center pt-6 mt-8 border-t">
      <Image 
        src={`${imageUrl ? imageUrl : "/placeholder.png"}`}
        alt="Placeholder" 
        width={60} 
        height={60} 
        className="rounded-full mr-4"
      />
      <div className="flex flex-col text-text-primary"><span className="text-text-secondary mb-1">Presented by</span> {name}</div>
    </div>
  )
}
export default Chef;