import { RecipeDescriptionfProps } from "@/types/types";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const Description:React.FC<RecipeDescriptionfProps> = ({text}) => {
  return (
    <div className="mt-4">
      <p className="text-text-clr-primary text-xl  mb-2">Story</p>
      <div className="text-text-clr-secondary leading-5">
        <ReactMarkdown children={text || ''} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  )
}

export default Description;
  