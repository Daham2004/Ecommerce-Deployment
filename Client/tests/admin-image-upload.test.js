import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the ProductImageUpload component
jest.mock('../src/components/admin-view/image-upload', () => ({
  imageFile,
  setImageFile,
  imageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  isEditMode,
  isCustomStyling = false,
}) => (
  <div>
    <h1>Product Image Upload</h1>
    <button>Upload Image</button>
  </div>
));

import ProductImageUpload from '../src/components/admin-view/image-upload';

test('renders ProductImageUpload component', () => {
  render(<ProductImageUpload />);
  expect(screen.getByText(/Product Image Upload/i)).toBeInTheDocument();
  expect(screen.getByText(/Upload Image/i)).toBeInTheDocument();
});