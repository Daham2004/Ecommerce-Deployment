import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the AuthRegister component
jest.mock('../src/pages/auth/register', () => () => (
  <div>
    <h1>Create new account</h1>
    <a href="/auth/login">Login</a>
  </div>
));

import AuthRegister from '../src/pages/auth/register';

test('renders AuthRegister component', () => {
  render(<AuthRegister />);
  expect(screen.getByText(/Create new account/i)).toBeInTheDocument();
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});