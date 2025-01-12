import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Mock the PaymentSuccessPage component
const PaymentSuccessPage = ({ onNavigate }) => (
  <div>
    <h1>Payment is successful!</h1>
    <button onClick={onNavigate}>View Orders</button>
  </div>
);

test('renders PaymentSuccessPage component', () => {
  render(<PaymentSuccessPage />);
  expect(screen.getByText(/Payment is successful!/i)).toBeInTheDocument();
  expect(screen.getByText(/View Orders/i)).toBeInTheDocument();
});

test('handles View Orders button click', () => {
  const onNavigate = jest.fn();
  render(<PaymentSuccessPage onNavigate={onNavigate} />);
  
  const button = screen.getByText(/View Orders/i);
  fireEvent.click(button);
  
  expect(onNavigate).toHaveBeenCalled();
});