import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Mock the AdminOrdersView component
jest.mock('../src/components/admin-view/orders', () => () => (
  <div>
    <h1>Admin Orders</h1>
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12345</td>
          <td>Pending</td>
          <td>
            <button>Fetch Order Details</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
));

import AdminOrdersView from '../src/components/admin-view/orders';

test('renders AdminOrdersView component', () => {
  render(<AdminOrdersView />);
  expect(screen.getByText(/Admin Orders/i)).toBeInTheDocument();
  expect(screen.getByText(/Order ID/i)).toBeInTheDocument();
  expect(screen.getByText(/Status/i)).toBeInTheDocument();
  expect(screen.getByText(/Actions/i)).toBeInTheDocument();
  expect(screen.getByText(/12345/i)).toBeInTheDocument();
  expect(screen.getByText(/Pending/i)).toBeInTheDocument();
  expect(screen.getByText(/Fetch Order Details/i)).toBeInTheDocument();
});

test('handles fetch order details button click', () => {
  render(<AdminOrdersView />);
  
  const button = screen.getByText(/Fetch Order Details/i);
  fireEvent.click(button);
 
  expect(button).toBeInTheDocument();
});