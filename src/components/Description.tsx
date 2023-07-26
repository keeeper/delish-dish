import { RecipeDescriptionfProps } from "@/types/types";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const Description:React.FC<RecipeDescriptionfProps> = ({text}) => {
  return (
    <div className="mt-4">
      <p className="text-text-primary-clr text-xl font-comfortaa mb-2">Story</p>
      <div className="text-text-secondary-clr leading-5">
        <ReactMarkdown children={text || ''} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  )
}

export default Description;
  