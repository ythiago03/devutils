import { useCallback, useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/config/firebase';
import Card from '../../components/Card/Card';
import { Skeleton } from "@/components/ui/skeleton";
import './PublicApis.scss';

interface ApiCard {
  id: string;
  name: string;
  siteUrl: string;
  coverUrl: string;
  type: string;
  description: string;
  badges: string[];
}

const PublicApis = () => {
  const [cards, setCards] = useState<ApiCard[] | null>(null);
  const [isCardLoading, setIsCardLoading] = useState<boolean>(true);

  const loadImages = async (cards: ApiCard[]): Promise<void> => {
    const imagePromises = cards.map((card): Promise<void> => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = card.coverUrl;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    await Promise.all(imagePromises);
  }

  const getPublicApis = useCallback(async (): Promise<void> => {
    try {
      const publicApisRef = collection(db, "public-apis");
      const data = await getDocs(publicApisRef);
      
      const filteredData: ApiCard[] = data.docs.map((doc): ApiCard => {
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

      await loadImages(filteredData);
      setCards(filteredData);
      setIsCardLoading(false);
    } 
    catch (err) {
      console.error("An error ocurred when getting public apis list",err);
      setIsCardLoading(false);
    }
  }, []);

  useEffect(() => {
    getPublicApis();
  }, [getPublicApis]);

  if (isCardLoading) {
    return (
      <section data-testid="card-skeleton-loading">
        <h1 className='title'>A list of cool APIs</h1>

        <div className="cards_container">
          {Array(cards ? cards?.length : 15).fill(0).map((_, index) => (
            <div key={index} className="flex flex-col space-y-3 mt-6">
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
      <h1 className='title'>A list of cool APIs</h1>
      <div className="cards_container">
        {cards?.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default PublicApis;
