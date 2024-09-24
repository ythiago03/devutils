import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { getCards } from '@/services/apiCards';
import Icons from './Icons';

jest.mock('@/services/apiCards');

beforeAll(() => {
  Object.defineProperty(global.Image.prototype, 'src', {
    set() {
      setTimeout(() => this.onload(), 100);
    },
  });
});

const mockCards = [
  { id: 1, title: 'Card 1', coverUrl: 'url1', description: 'Desc 1', badges: ['API'] },
  { id: 2, title: 'Card 2', coverUrl: 'url2', description: 'Desc 2', badges: ['API'] },
];

describe('Icons component', () => {
  beforeEach(() => {
    (getCards as jest.Mock).mockReturnValue(mockCards);
  });

  it('should be render skeleton loading', () => {
    render(<Icons/>);

    expect(screen.getByTestId('card-skeleton-loading')).toBeTruthy()
  })

  it('should be render container after loading', async () => {
    render(<Icons/>);

    await waitFor(() => expect(screen.queryByTestId('card-skeleton-loading')).not.toBeInTheDocument());

    expect(screen.getByTestId('card-container')).toBeInTheDocument()
  })
})