import { render, screen } from '@testing-library/react';
import App from './App';

test('renders List of Players heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/List of Players/i);
  expect(headingElement).toBeInTheDocument();
});
