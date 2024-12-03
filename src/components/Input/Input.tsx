import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Input as InputShadcn } from "../ui/input";
import { Label } from "../ui/label";

import './Input.scss'

interface InputProps {
  label: string
  value: string,
  copyToClipboard: () => void
}

const Input: React.FC<InputProps> = ({label, value, copyToClipboard}) => {
  
  return (
    <div className='input_container'>
      <Label htmlFor={`input-${value}`}>{label}</Label>
      <div>
        <InputShadcn data-testid="person-name" disabled type="text" value={value} id={`input-${value}`}/>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span 
                onClick={copyToClipboard} 
                className="material-symbols-outlined"
              >
                content_paste
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy to clipboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}

export default Input;