import { RecipeDescriptionfProps } from "@/types/types";

const Description:React.FC<RecipeDescriptionfProps> = ({text}) => {
  return (
    <div className="mt-4">
      <p className="text-text-primary text-xl  mb-2">Description:</p>
      <p className="text-text-secondary leading-5">{text}</p>
    </div>
  )
}

export default Description;
  