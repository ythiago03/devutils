import Card from '../../components/Card/Card';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { Skeleton } from "@/components/ui/skeleton"
import './Icons.scss';
import { useEffect, useState } from 'react';

interface ApiCard {
  id: string;
  name: string;
  siteUrl: string;
  coverUrl: string;
  type: string;
  description: string;
  badges: string[];
}

const Icons = () => {
  const [cards, setCards] = useState<ApiCard[] | null>(null);
  const [isCardLoading, setIsCardLoading] = useState(true);

  useEffect(() => {
    const getPublicIcons = async () => {
      try {
        const publicIconsRef = collection(db, "free-icons");
        const data = await getDocs(publicIconsRef);
        
        const filteredData: ApiCard[] = data.docs.map((doc) => {
          const docData = doc.data();
          return {
            id: doc.id,
            name: docData.name || "",
            siteUrl: docData.siteUrl || "",
            coverUrl: docData.coverUrl || "",
            type: docData.type || "",
            description: docData.description || "",
            badges: docData.badges || [""]
          };
        });

        const imagePromises = filteredData.map((card) => {
          return new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.src = card.coverUrl;
            img.onload = () => resolve();
            img.onerror = () => reject();
          });
        });

        await Promise.all(imagePromises);
        setCards(filteredData);
        setIsCardLoading(false);
      } 
      catch (err) {
        console.error(err);
        setIsCardLoading(false);
      }
    };

    getPublicIcons();
    }, []
  );

  if (isCardLoading) {
    return (
      <section data-testid="card-skeleton-loading">
        <div className="cards_container">
          {Array(6).fill(0).map((_, index) => (
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
    <section data-testid="card-container">
      <div className="cards_container">
        {cards?.map((card: ApiCard) => <Card key={card.id} card={card}/>)}
      </div>
    </section>
  )
}

export default Icons