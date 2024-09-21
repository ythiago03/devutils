import Card from '../../components/Card/Card';
import './PublicApis.scss';

interface CardInterface {
  title: string,
  coverUrl: string,
  description: string
  badges: string[]
}

const PublicApis = () => {
  const cards = [
    {
      title: 'MyAnimeList',
      coverUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/58/MyAnimeList_-_Full_Text_Logo.jpg',
      description: 'Anime and manga database and community.',
      badges: [
        'Anime',
        'Cors',
        '0Auth',
        'Https'
      ]
    },
    {
      title: 'Faker',
      coverUrl: 'https://fakerjs.dev/social-image.png',
      description: 'Generate massive amounts of fake (but realistic) data for testing and development.',
      badges: [
        'Test Data',
        'Https',
        'No auth',
        'Cors'
      ]
    },
    {
      title: 'Remove.bg',
      coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrEZCgCJXEskIKv7yvryMv9O_C9-jyxx58A&s',
      description: 'Image background removal.',
      badges: [
        'Image',
        'Api Key',
        'Https',
        'Cors'
      ]
    },
    {
      title: 'Spotify',
      coverUrl: 'https://www.scdn.co/i/_global/open-graph-default.png',
      description: 'View Spotify music catalog, manage users&apos;libraries, get recommendations and more.',
      badges: [
        'Music',
        'Cors',
        '0Auth',
        'Https'
      ]
    },
  ]
  
  return (
    <section>
      <div className="cards_container">
        {cards.map((card: CardInterface) => <Card card={card}/>)}
      </div>
    </section>
  )
}

export default PublicApis