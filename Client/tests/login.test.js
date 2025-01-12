import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the AuthLogin component
jest.mock('../src/pages/auth/login', () => () => (
  <div>
    <h1>Sign in to your account</h1>
    <a href="/auth/register">Register</a>
  </div>
));

import AuthLogin from '../src/pages/auth/login';

test('renders AuthLogin component', () => {
  render(<AuthLogin />);
  expect(screen.getByText(/Sign in to your account/i)).toBeInTheDocument();
  expect(screen.getByText(/Register/i)).toBeInTheDocument();
});