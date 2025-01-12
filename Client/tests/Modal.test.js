import React from 'react';
import { render, fireEvent } from '@testing-library/react';

// Simplified CustomModal Component
const CustomModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div>
      <h1>Order Status Update</h1>
      <p>{message}</p>
      <button onClick={onClose}>OK</button>
    </div>
  );
};

describe('CustomModal Component', () => {
  test('renders the modal with the correct message', () => {
    const { getByText } = render(<CustomModal isOpen={true} onClose={() => {}} message="Test message" />);
    expect(getByText('Order Status Update')).toBeTruthy();
    expect(getByText('Test message')).toBeTruthy();
  });

  test('calls onClose when the OK button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(<CustomModal isOpen={true} onClose={onCloseMock} message="Test message" />);
    fireEvent.click(getByText('OK'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('does not render the modal when isOpen is false', () => {
    const { queryByText } = render(<CustomModal isOpen={false} onClose={() => {}} message="Test message" />);
    expect(queryByText('Order Status Update')).toBeNull();
    expect(queryByText('Test message')).toBeNull();
  });
});
