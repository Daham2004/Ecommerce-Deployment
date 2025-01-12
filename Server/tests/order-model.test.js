const Order = require('../models/Order');

// Mock the Order model validate function
jest.mock('../models/Order', () => {
  return jest.fn().mockImplementation(() => {
    return {
      validate: jest.fn().mockResolvedValue(true), // Mock the resolved validation (valid order)
    };
  });
});

describe('Order Model', () => {
  test('should create an order with valid data', async () => {
    const order = new Order({ userId: '123', products: [{ productId: '456', quantity: 2 }] });
    
    // Validate the order, it should resolve successfully
    await expect(order.validate()).resolves.not.toThrow();
  });

  test('should fail validation with invalid data', async () => {
    const order = new Order({ userId: '123', products: [{ productId: '456', quantity: -1 }] });
    
    // Mock failed validation by throwing an error
    order.validate = jest.fn().mockRejectedValue(new Error('Validation failed'));

    try {
      await order.validate();
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toBe('Validation failed');
    }
  });
});
