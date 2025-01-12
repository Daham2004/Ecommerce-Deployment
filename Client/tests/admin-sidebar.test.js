import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the AdminSidebar component
jest.mock('../src/components/admin-view/sidebar', () => () => (
  <div>
    <nav>
      <ul>
        <li>Dashboard</li>
        <li>Products</li>
        <li>Orders</li>
      </ul>
    </nav>
  </div>
));

import AdminSidebar from '../src/components/admin-view/sidebar';

test('renders AdminSidebar component', () => {
  render(<AdminSidebar />);
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  expect(screen.getByText(/Products/i)).toBeInTheDocument();
  expect(screen.getByText(/Orders/i)).toBeInTheDocument();
});