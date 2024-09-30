import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Card from "./Card";


describe('Card component', () => {

  it('generate card component', () => {
    const cardContent = {
      id: "0",
      name: 'Spotify',
      siteUrl: "https://www.scdn.com",
      type: "teste",
      coverUrl: 'https://www.scdn.co/i/_global/open-graph-default.png',
      description: 'View Spotify music catalog, manage users&apos;libraries, get recommendations and more.',
      badges: [
        'Music',
        'Cors',
        '0Auth',
        'Https'
      ]
    }

    render(<Card card={cardContent}/>);

    expect(screen.getByText('Spotify')).toBeInTheDocument();
  })
})