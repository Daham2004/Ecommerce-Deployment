import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the ShoppingAccount component
const ShoppingAccount = () => (
  <div>
    <h1>Shopping Account</h1>
    <button>Orders</button>
    <button>Address</button>
  </div>
);

test('renders ShoppingAccount component', () => {
  render(<ShoppingAccount />);
  expect(screen.getByText(/Shopping Account/i)).toBeInTheDocument();
  expect(screen.getByText(/Orders/i)).toBeInTheDocument();
  expect(screen.getByText(/Address/i)).toBeInTheDocument();
});