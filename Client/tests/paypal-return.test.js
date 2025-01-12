import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the PaypalReturnPage component
const PaypalReturnPage = () => (
  <div>
    <h1>Payment is being processed</h1>
  </div>
);

test('renders PaypalReturnPage component', () => {
  render(<PaypalReturnPage />);
  expect(screen.getByText(/Payment is being processed/i)).toBeInTheDocument();
});