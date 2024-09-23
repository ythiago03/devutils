import Card from '../../components/Card/Card';
import { Skeleton } from "@/components/ui/skeleton"
import './PublicApis.scss';
import { useEffect, useState } from 'react';
import { getCards } from '@/services/apiCards';

interface CardInterface {
  title: string,
  coverUrl: string,
  description: string
  badges: string[]
}

const PublicApis = () => {
  const cards = getCards()
  
  const [isCardLoading, setIsCardLoading] = useState(true);

  useEffect(() => {
    const imagePromises = cards.map((card) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = card.coverUrl;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    Promise.all(imagePromises)
      .then(() => setIsCardLoading(false)) 
      .catch(() => setIsCardLoading(false));
  }, [cards]);

  if (isCardLoading) {
    return (
      <section>
        <div className="cards_container">
          {Array(4).fill(0).map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  return (
    <section>
      <div className="cards_container">
        {cards.map((card: CardInterface) => <Card card={card}/>)}
      </div>
      
    </section>
  )
}

export default PublicApis