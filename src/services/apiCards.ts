export const getCards = () => {
  return [
    {
      id: 0,
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
      id: 1,
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
      id: 2,
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
      id: 3,
      title: 'Spotify',
      coverUrl: 'https://www.scdn.co/i/_global/open-graph-default.png',
      description: "View Spotify music catalog, manage users'libraries, get recommendations and more.",
      badges: [
        'Music',
        'Cors',
        '0Auth',
        'Https'
      ]
    }
  ]
}