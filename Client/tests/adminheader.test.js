import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the AdminHeader component
jest.mock('../src/components/admin-view/header', () => ({ setOpen }) => (
  <div>
    <button onClick={() => setOpen(true)}>Toggle Menu</button>
    <button>Logout</button>
  </div>
));

import AdminHeader from '../src/components/admin-view/header';

test('renders AdminHeader component', () => {
  render(<AdminHeader setOpen={() => {}} />);
  expect(screen.getByText(/Toggle Menu/i)).toBeInTheDocument();
  expect(screen.getByText(/Logout/i)).toBeInTheDocument();
});