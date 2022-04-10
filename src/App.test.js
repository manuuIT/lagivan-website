import { render, screen } from '@testing-library/react';
import App from './App';

test('pizza La Givan', () => {
  render(<App />);
  const linkElement = screen.getByText(/pizza La Givan/i);
  expect(linkElement).toBeInTheDocument();
});
