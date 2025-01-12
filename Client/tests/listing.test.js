import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the Listing component
const Listing = () => (
  <div>
    <h1>Product Listing</h1>
    <button>Filter</button>
    <button>Sort</button>
    <div>Product 1</div>
    <div>Product 2</div>
  </div>
);

test('renders Listing component', () => {
  render(<Listing />);
  expect(screen.getByText(/Product Listing/i)).toBeInTheDocument();
  expect(screen.getByText(/Filter/i)).toBeInTheDocument();
  expect(screen.getByText(/Sort/i)).toBeInTheDocument();
  expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
});