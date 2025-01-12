const request = require('supertest');
const express = require('express');

// Mock controller functions
const getFilteredProducts = (req, res) => {
  res.status(200).json({ message: 'Filtered products' });
};

const getProductDetails = (req, res) => {
  res.status(200).json({ message: `Product details for ID ${req.params.id}` });
};

// Set up the app and routes
const app = express();
app.use(express.json());
app.get('/products', getFilteredProducts);
app.get('/products/:id', getProductDetails);

describe('Products Controller', () => {
  it('should get filtered products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Filtered products');
  });

  it('should get product details', async () => {
    const response = await request(app).get('/products/1');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Product details for ID 1');
  });
});
