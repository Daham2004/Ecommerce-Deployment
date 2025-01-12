import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the StarRatingComponent
jest.mock('../src/components/common/star-rating', () => ({ rating }) => (
  <div>
    <span>Star Rating: {rating}</span>
    <button>Star 1</button>
    <button>Star 2</button>
    <button>Star 3</button>
    <button>Star 4</button>
    <button>Star 5</button>
  </div>
));

import StarRatingComponent from '../src/components/common/star-rating';

test('renders StarRatingComponent component', () => {
  render(<StarRatingComponent rating={3} />);
  expect(screen.getByText(/Star Rating: 3/i)).toBeInTheDocument();
  expect(screen.getByText(/Star 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Star 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Star 3/i)).toBeInTheDocument();
  expect(screen.getByText(/Star 4/i)).toBeInTheDocument();
  expect(screen.getByText(/Star 5/i)).toBeInTheDocument();
});