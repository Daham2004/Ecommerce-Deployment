import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../src/HelloWorld';

test('renders Hello, World!', () => {
  render(<HelloWorld />);
  const element = screen.getByText(/Hello, World!/i);
  expect(element).toBeInTheDocument();
});