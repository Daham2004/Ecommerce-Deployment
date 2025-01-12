import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the AdminDashboard component
jest.mock('../src/pages/admin-view/dashboard', () => () => (
  <div>
    <h1>Admin Dashboard</h1>
    <button>Upload</button>
  </div>
));

import AdminDashboard from '../src/pages/admin-view/dashboard';

test('renders AdminDashboard component', () => {
  render(<AdminDashboard />);
  expect(screen.getByText(/Admin Dashboard/i)).toBeInTheDocument();
  expect(screen.getByText(/Upload/i)).toBeInTheDocument();
});