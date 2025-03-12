import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Websites item of the Toolbar', () => {
  render(<App />);
  const linkElement = screen.getByText(/Websites/i);
  expect(linkElement).toBeInTheDocument();
});

