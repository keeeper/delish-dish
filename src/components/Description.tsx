import { RecipeDescriptionfProps } from "@/types/types";

const Description:React.FC<RecipeDescriptionfProps> = ({text}) => {
  return (
    <div className="mt-4">
      <p className="text-text-clr-primary text-xl  mb-2">Story</p>
      <p className="text-text-clr-secondary leading-5">{text}</p>
    </div>
  )
}

export default Description;
  