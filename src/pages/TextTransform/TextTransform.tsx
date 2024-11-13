import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

import './TextTransform.scss';
import { Copy, Eraser, Undo2 } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const TextTransform: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [historyText, setHistoryText] = useState<string>('');

  const transformSentenceCase = (): void => {
    if(text === '') return;
    setHistoryText(text)
    setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
  }

  const transformLowerCase = (): void => {
    if(text === '') return;
    setHistoryText(text)
    setText(text.toLowerCase())
  }

  const transformUpperCase = (): void => {
    if(text === '') return;
    setHistoryText(text)
    setText(text.toUpperCase())
  }

  const transformCaptalizedCase = (): void => {
    if(text === '') return;
    setHistoryText(text)

    const words = text.split(' ');
    const captalizedText = words.map((word): string => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    setText(captalizedText.join(' '))
  }

  const transformReverse = (): void => {
    if(text === '') return;
    setHistoryText(text)
    setText(text.split('').reverse().join(''))
  }

  const copyToClipboard = (value: string) =>{
    navigator.clipboard.writeText(value)
    toast({
      title: "Text copied to clipboard",
    })
  }

  return (
    <section className="text-transform_container">
      <h2>Text Transform</h2>
      <Textarea value={text} onChange={(e) => setText(e.target.value)} className="mt-5 w-2/3 mx-auto min-h-44" placeholder="Type your text here..." />
      <div className="modifiers">
        <Button onClick={transformSentenceCase} variant="outline">Sentence case</Button>
        <Button onClick={transformLowerCase} variant="outline">lower case</Button>
        <Button onClick={transformUpperCase} variant="outline">UPPER CASE</Button>
        <Button onClick={transformCaptalizedCase} variant="outline">Captalized Case</Button>
        <Button onClick={transformReverse} variant="outline">Reverse</Button>
      </div>
      <div className="controls">
        <Button 
          onClick={() => {
            setHistoryText(text)
            setText('')}
          } 
          className="gap-3" disabled={text === ''}
        > 
          <Eraser />Clear
        </Button>
        <Button onClick={() => setText(historyText)} className="gap-3" disabled={historyText === ''}>
          <Undo2 />Undo
        </Button>
        <Button onClick={() => copyToClipboard(text)} className="gap-3" disabled={text === ''}>
          <Copy />Copy
        </Button>
      </div>
    </section>
  )
}

export default TextTransform