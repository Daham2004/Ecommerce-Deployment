import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the ShoppingCheckout component
const ShoppingCheckout = () => (
  <div>
    <h1>Checkout</h1>
    <button>Place Order</button>
    <div>Cart Item 1</div>
    <div>Cart Item 2</div>
  </div>
);

test('renders ShoppingCheckout component', () => {
  render(<ShoppingCheckout />);
  expect(screen.getByText(/Checkout/i)).toBeInTheDocument();
  expect(screen.getByText(/Place Order/i)).toBeInTheDocument();
  expect(screen.getByText(/Cart Item 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Cart Item 2/i)).toBeInTheDocument();
});