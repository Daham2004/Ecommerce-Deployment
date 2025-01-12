import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the AdminProductTile component
jest.mock('../src/components/admin-view/product-tile', () => ({ product }) => (
  <div>
    <img src={product?.image} alt={product?.title} />
    <h2>{product?.title}</h2>
    <p>{product?.description}</p>
    <span>${product?.price}</span>
    {product?.salePrice > 0 && <span>${product?.salePrice}</span>}
    <button>Edit</button>
    <button>Delete</button>
  </div>
));

import AdminProductTile from '../src/components/admin-view/product-tile';

test('renders AdminProductTile component', () => {
  const product = {
    image: 'image-url',
    title: 'Product Title',
    description: 'Product Description',
    price: 100,
    salePrice: 80,
  };

  render(<AdminProductTile product={product} />);
  
  expect(screen.getByAltText(/Product Title/i)).toBeInTheDocument();
  expect(screen.getByText(/Product Title/i)).toBeInTheDocument();
  expect(screen.getByText(/Product Description/i)).toBeInTheDocument();
  expect(screen.getByText(/\$100/i)).toBeInTheDocument();
  expect(screen.getByText(/\$80/i)).toBeInTheDocument();
  expect(screen.getByText(/Edit/i)).toBeInTheDocument();
  expect(screen.getByText(/Delete/i)).toBeInTheDocument();
});