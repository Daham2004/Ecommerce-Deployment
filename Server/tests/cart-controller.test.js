const request = require('supertest');
const express = require('express');

// Mock `addItemToCart` function
const addItemToCart = (req, res) => {
  const { userId, productId, quantity } = req.body;

  if (!userId || !productId || !quantity) {
    return res.status(400).json({ success: false, message: 'Invalid input' });
  }

  // Simulate adding an item to the cart
  const mockCart = {
    userId,
    items: [{ productId, quantity }],
  };

  res.status(200).json({ success: true, data: mockCart });
};

// Set up the app and route
const app = express();
app.use(express.json());
app.post('/cart', addItemToCart);

describe('Cart Controller', () => {
  it('should add an item to the cart', async () => {
    const response = await request(app)
      .post('/cart')
      .send({ userId: 'user1', productId: 'product1', quantity: 1 });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.items.length).toBe(1);
    expect(response.body.data.items[0].productId).toBe('product1');
    expect(response.body.data.items[0].quantity).toBe(1);
  });

  it('should return 400 for invalid input', async () => {
    const response = await request(app)
      .post('/cart')
      .send({ userId: '', productId: '', quantity: 0 });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Invalid input');
  });
});
