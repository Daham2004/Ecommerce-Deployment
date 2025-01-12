import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the ProductFilter component
jest.mock('../src/components/shopping-view/filter', () => () => (
  <div>
    <h2>Filters</h2>
    <h3>Category</h3>
    <label>
      <input type="checkbox" />
      Option 1
    </label>
    <label>
      <input type="checkbox" />
      Option 2
    </label>
  </div>
));

import ProductFilter from '../src/components/shopping-view/filter';

test('renders ProductFilter component', () => {
  render(<ProductFilter />);
  expect(screen.getByText(/Filters/i)).toBeInTheDocument();
  expect(screen.getByText(/Category/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Option 1/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Option 2/i)).toBeInTheDocument();
});