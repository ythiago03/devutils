import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

import './TextTransform.scss';
import { Copy, Eraser, Undo2 } from "lucide-react";

const TextTransform: React.FC = () => {
  return (
    <section className="text-transform_container">
      <h2>Text Transform</h2>
      <Textarea className="mt-5 w-2/3 mx-auto" placeholder="Type your text here..." />
      <div className="modifiers">
        <Button variant="outline">Sentence case</Button>
        <Button variant="outline">lower case</Button>
        <Button variant="outline">UPPER CASE</Button>
        <Button variant="outline">Captalized Case</Button>
        <Button variant="outline">Reverse</Button>
      </div>
      <div className="controls">
        <Button> 
          <Eraser />Clear
        </Button>
        <Button>
          <Undo2 />Undo
        </Button>
        <Button>
          <Copy />Copy
        </Button>
      </div>
    </section>
  )
}

export default TextTransform