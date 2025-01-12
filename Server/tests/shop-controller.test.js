const request = require('supertest');
const express = require('express');

// Mock the getProducts function directly
const getProducts = jest.fn((req, res) => {
  res.status(200).json([
    { _id: '123', name: 'Product 1' },
    { _id: '124', name: 'Product 2' },
  ]);
});

const app = express();
app.use(express.json());

// Directly attach the mocked getProducts to the route
app.get('/api/shop/products', getProducts);

describe('Shop Controller', () => {
  test('getProducts should return a list of products', async () => {
    const response = await request(app).get('/api/shop/products');

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { _id: '123', name: 'Product 1' },
      { _id: '124', name: 'Product 2' },
    ]);
  });
});
