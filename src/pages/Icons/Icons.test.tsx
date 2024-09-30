import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { getDocs } from 'firebase/firestore';
import Icons from './Icons';

jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  getDocs: jest.fn(),
}));


beforeAll(() => {
  Object.defineProperty(global.Image.prototype, 'src', {
    set() {
      setTimeout(() => this.onload(), 100);
    },
  });
  Object.defineProperty(import.meta, 'env', {
    value: {
      VITE_FIREBASE_API_KEY: 'key',
      VITE_FIREBASE_AUTH_DOMAIN: 'domain',
      VITE_FIREBASE_PROJECT_ID: 'project_id',
      VITE_FIREBASE_STORAGE_BUCKET: 'storage_bucket',
      VITE_FIREBASE_MESSAGING_SENDER_ID: 'sender_id',
      VITE_FIREBASE_APP_ID: 'app_id',
      VITE_FIREBASE_MEASUREMENT_ID: 'measurement_id',
    },
    writable: true,
  });
});

const mockData = [
  {
    id: '1',
    data: () => ({
      name: 'API Teste 1',
      siteUrl: 'https://api1.com',
      coverUrl: 'https://api1.com/image.png',
      type: 'REST',
      description: 'Descrição da API 1',
      badges: ['Badge 1', 'Badge 2'],
    }),
  },
  {
    id: '2',
    data: () => ({
      name: 'API Teste 2',
      siteUrl: 'https://api2.com',
      coverUrl: 'https://api2.com/image2.png',
      type: 'GraphQL',
      description: 'Descrição da API 2',
      badges: ['Badge A'],
    }),
  },
];

describe('Icons component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be render skeleton loading', () => {
    (getDocs as jest.Mock).mockResolvedValue({
      docs: mockData
    });
    render(<Icons/>);

    expect(screen.getByTestId('card-skeleton-loading')).toBeTruthy()
  })

  it('should be render container after loading', async () => {
    (getDocs as jest.Mock).mockResolvedValue({
      docs: mockData
    });
    render(<Icons/>);

    await waitFor(() => expect(screen.queryByTestId('card-skeleton-loading')).not.toBeInTheDocument());

    expect(screen.getByTestId('card-container')).toBeInTheDocument()
  })
})