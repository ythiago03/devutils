import Card from '../../components/Card/Card';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { Skeleton } from "@/components/ui/skeleton"
import './Icons.scss';
import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";


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

  const icons = [
    {
      id: 0,
      code: ":tada:",
      unicode: "&#127881;",
      conventional: "Initial commit"
    },
    {
      id: 1,
      code: ":sparkles:",
      unicode: "&#10024;",
      conventional: "New feature"
    },
    {
      id: 2,
      code: ":bug:",
      unicode: "&#128027;",
      conventional: "Bugfix"
    },
    {
      id: 3,
      code: ":books:",
      unicode: "&#128218;",
      conventional: "Documentation"
    },
    {
      id: 4,
      code: ":heavy_check_mark:",
      unicode: "&#9989;",
      conventional: "Make a test pass"
    },
    {
      id: 5,
      code: ":hammer:",
      unicode: "&#128296;",
      conventional: "Refactor code"
    },
    {
      id: 6,
      code: ":heavy_plus_sign:",
      unicode: "&#10133;",
      conventional: "Adding a dependency"
    },
    {
      id: 7,
      code: ":heavy_minus_sign:",
      unicode: "&#10134;",
      conventional: "Removing a dependency"
    },
  ]

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

  return (
    <section data-testid="card-container" className='icons_container'>
      <h1>Conventional commit icons</h1>
      <Table>
        <TableCaption>A list of icons for conventional commits.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Icon</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Code</TableHead>
            <TableHead className="text-center">Copy to clipboard</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
         {icons.map(icon => 
          <TableRow>
            <TableCell className="font-medium" dangerouslySetInnerHTML={{ __html: icon.unicode }}></TableCell>
            <TableCell>{icon.conventional}</TableCell>
            <TableCell>{icon.code}</TableCell>
            <TableCell className="text-center">
              <span 
                onClick={() => {navigator.clipboard.writeText(icon.code)}} className="material-symbols-outlined"
              >
                content_paste
              </span>
            </TableCell>
          </TableRow>
         )}
        </TableBody>
      </Table>
      <Separator className="mt-5 mb-5" />

      <h2>Public icons for copy or download</h2>
      {
          isCardLoading 
          ? <section data-testid="card-skeleton-loading">
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
          : <div className="cards_container">
              {cards?.map((card: ApiCard) => <Card key={card.id} card={card}/>)}
            </div>
        }
      
    </section>
  )
}

export default Icons