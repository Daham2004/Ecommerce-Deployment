const request = require('supertest');
const express = require('express');

// Mock email service
const sendConfirmationEmail = jest.fn();

// Mock `checkout` controller
const checkout = (req, res) => {
  const { userId, items } = req.body;

  if (!userId || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ success: false, message: 'Invalid input' });
  }

  // Mocked response for simplicity
  res.status(200).json({
    success: true,
    message: 'Order processed successfully',
    order: {
      _id: 'mockOrderId',
      userId,
      items,
    },
    inventory: items.map((item) => ({
      productId: item.productId,
      quantity: 10 - item.quantity, // Fixed starting inventory
    })),
  });

  // Mock confirmation email
  sendConfirmationEmail(userId, 'mockOrderId');
};

// Set up express app
const app = express();
app.use(express.json());
app.post('/checkout', checkout);

describe('Checkout Endpoint', () => {
  it('should process the order and send confirmation email', async () => {
    const response = await request(app)
      .post('/checkout')
      .send({ userId: 'user1', items: [{ productId: 'product1', quantity: 2 }] });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Order processed successfully');
    expect(response.body.order).toEqual({
      _id: 'mockOrderId',
      userId: 'user1',
      items: [{ productId: 'product1', quantity: 2 }],
    });
    expect(response.body.inventory).toEqual([{ productId: 'product1', quantity: 8 }]);
    expect(sendConfirmationEmail).toHaveBeenCalledWith('user1', 'mockOrderId');
  });

  it('should return 400 for invalid input', async () => {
    const response = await request(app).post('/checkout').send({});
    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Invalid input');
  });
});

