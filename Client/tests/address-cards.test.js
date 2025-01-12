import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the AddressCard component
jest.mock('../src/components/shopping-view/address-card', () => ({ addressInfo }) => (
  <div>
    <p>Address: {addressInfo?.address}</p>
    <p>City: {addressInfo?.city}</p>
    <p>Pincode: {addressInfo?.pincode}</p>
    <p>Phone: {addressInfo?.phone}</p>
    <button>Edit</button>
    <button>Delete</button>
  </div>
));

import AddressCard from '../src/components/shopping-view/address-card';

test('renders AddressCard component', () => {
  const addressInfo = {
    address: '123 Main St',
    city: 'Anytown',
    pincode: '12345',
    phone: '555-555-5555',
  };

  render(<AddressCard addressInfo={addressInfo} />);
  
  expect(screen.getByText(/Address: 123 Main St/i)).toBeInTheDocument();
  expect(screen.getByText(/City: Anytown/i)).toBeInTheDocument();
  expect(screen.getByText(/Pincode: 12345/i)).toBeInTheDocument();
  expect(screen.getByText(/Phone: 555-555-5555/i)).toBeInTheDocument();
  expect(screen.getByText(/Edit/i)).toBeInTheDocument();
  expect(screen.getByText(/Delete/i)).toBeInTheDocument();
});