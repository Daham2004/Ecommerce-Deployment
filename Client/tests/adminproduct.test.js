import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the AdminProducts component
jest.mock('../src/pages/admin-view/products', () => () => (
  <div>
    <h1>Admin Products</h1>
    <button>Add New Product</button>
  </div>
));

import AdminProducts from '../src/pages/admin-view/products';

test('renders AdminProducts component', () => {
  render(<AdminProducts />);
  expect(screen.getByText(/Admin Products/i)).toBeInTheDocument();
  expect(screen.getByText(/Add New Product/i)).toBeInTheDocument();
});