import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello there !', () => {
  render(<App />);
  const helloElement = screen.getByText(/hello there !/i);
  expect(helloElement).toBeInTheDocument();
});
