import {
  Card as CardShadcn,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import './Card.scss';

interface CardInterface {
  card:{
    id: number,
    title: string,
    coverUrl: string,
    description: string
    badges: string[]
  }
}

const Card: React.FC<CardInterface> = ({card}) => {
  return (
    <CardShadcn className="card">
      <CardHeader className="card_header">
        <CardTitle>{card.title}</CardTitle>
        <img className="card_banner" src={card.coverUrl} alt={`Cover from api ${card.title}`} />
      </CardHeader>
      <CardContent className="card_content">
        <CardDescription>{card.description}</CardDescription>
      </CardContent>
      <CardFooter className="card_footer">
        {card.badges.map(badge => <Badge key={badge+card.id}>{badge}</Badge>)}
      </CardFooter>
    </CardShadcn>
  )
}

export default Card