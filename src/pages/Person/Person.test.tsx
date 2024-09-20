import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Person from './Person';

describe('Person Component', () => {
  it('renders personal information and address fields correctly', () => {
    render(<Person/>);
    
    // Verifica se os campos estão na tela com os textos corretos
    expect(screen.getByText('Personal Info')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();
    
  });

  // it('generates new person on button click', () => {
  //   render(<Person />);
    
  //   // Simula o clique no botão para gerar uma nova pessoa
  //   fireEvent.click(screen.getByText('Generate new person'));

  //   // Verifica se um nome foi gerado (o valor do campo não está vazio)
  //   expect(screen.getByLabelText('Name:')).not.toHaveValue('');
  // });

  // it('copies person data to clipboard', () => {
  //   const mockClipboard = jest.spyOn(navigator.clipboard, 'writeText');
    
  //   render(<Person />);
    
  //   // Simula o clique no botão "Copy JSON"
  //   fireEvent.click(screen.getByText('Copy JSON'));
    
  //   // Verifica se o JSON foi copiado para o clipboard
  //   expect(mockClipboard).toHaveBeenCalledTimes(1);
  // });
});
