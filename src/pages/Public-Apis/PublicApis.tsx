import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import './PublicApis.scss';

const PublicApis = () => {
  return (
    <section>
      <h1>Public Apis</h1>
      <div className="cards_container">
        <Card className="card">
          <CardHeader>
            <CardTitle>MyAnimeList</CardTitle>
            <img className="rounded-md object-cover" src="https://upload.wikimedia.org/wikipedia/commons/5/58/MyAnimeList_-_Full_Text_Logo.jpg" alt="" />
          </CardHeader>
          <CardContent>
            <CardDescription>Anime and manga database and community</CardDescription>
          </CardContent>
          <CardFooter className="card_footer">
            <Badge>Anime</Badge>
            <Badge>Cors</Badge>
            <Badge>0auth</Badge>
            <Badge>Http</Badge>
          </CardFooter>
        </Card>
        <Card className="card">
          <CardHeader>
            <CardTitle>MyAnimeList</CardTitle>
            <img className="rounded-md object-cover" src="https://upload.wikimedia.org/wikipedia/commons/5/58/MyAnimeList_-_Full_Text_Logo.jpg" alt="" />
          </CardHeader>
          <CardContent>
            <CardDescription>Anime and manga database and community</CardDescription>
          </CardContent>
          <CardFooter className="card_footer">
            <Badge>Anime</Badge>
            <Badge>Cors</Badge>
            <Badge>0auth</Badge>
            <Badge>Http</Badge>
          </CardFooter>
        </Card>
        <Card className="card">
          <CardHeader>
            <CardTitle>MyAnimeList</CardTitle>
            <img className="rounded-md object-cover" src="https://upload.wikimedia.org/wikipedia/commons/5/58/MyAnimeList_-_Full_Text_Logo.jpg" alt="" />
          </CardHeader>
          <CardContent>
            <CardDescription>Anime and manga database and community</CardDescription>
          </CardContent>
          <CardFooter className="card_footer">
            <Badge>Anime</Badge>
            <Badge>Cors</Badge>
            <Badge>0auth</Badge>
            <Badge>Http</Badge>
          </CardFooter>
        </Card>
        <Card className="card">
          <CardHeader>
            <CardTitle>MyAnimeList</CardTitle>
            <img className="rounded-md object-cover" src="https://upload.wikimedia.org/wikipedia/commons/5/58/MyAnimeList_-_Full_Text_Logo.jpg" alt="" />
          </CardHeader>
          <CardContent>
            <CardDescription>Anime and manga database and community</CardDescription>
          </CardContent>
          <CardFooter className="card_footer">
            <Badge>Anime</Badge>
            <Badge>Cors</Badge>
            <Badge>0auth</Badge>
            <Badge>Http</Badge>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

export default PublicApis