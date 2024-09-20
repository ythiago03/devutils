import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Person from './Person';

describe('Person Component', () => {
  it('renders personal information and address fields correctly', () => {
    render(<Person/>);

    expect(screen.getByText('Personal Info')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();
  });

  it('generates new person on button click', () => {
    render(<Person />);

    const inputElement = screen.getByTestId('person-name') as HTMLInputElement;
    const initialValue = inputElement.value;

    expect(initialValue).toBeTruthy();

    fireEvent.click(screen.getByText('Generate new person'));

    const newValue = inputElement.value;

    expect(newValue).not.toBe(initialValue);
  });
});
