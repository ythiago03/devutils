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
import { Link } from "react-router-dom";

interface CardInterface {
  card:{
    id: string,
    name: string,
    siteUrl: string,
    coverUrl: string,
    type: string,
    description: string
    badges: string[]
  }
}

const Card: React.FC<CardInterface> = ({card}) => {
  return (
    <CardShadcn className="card">
      <Link to={card.siteUrl} target="_blank">
        <CardHeader className="card_header">
          <CardTitle>{card.name}</CardTitle>
          <img className="card_banner" src={card.coverUrl} alt={`Cover from api ${card.name}`} />
        </CardHeader>
        <CardContent className="card_content">
          <CardDescription>{card.description}</CardDescription>
        </CardContent>
        <CardFooter className="card_footer">
          {card.badges.map(badge => <Badge key={badge+card.id}>{badge}</Badge>)}
        </CardFooter>
      </Link>
    </CardShadcn>
  )
}

export default Card