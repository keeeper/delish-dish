import { RecipeTagProps } from "@/types/types";

const Tag:React.FC<RecipeTagProps> = ({name}) => {
  return (
    <div className="px-4 py-2 text-xs bg-theme-primaryTransparent-clr text-text-primary-clr inline-block rounded-lg mr-2">{name}</div>
  )
}
export default Tag;