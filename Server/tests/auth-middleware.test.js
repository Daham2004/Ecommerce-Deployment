const request = require('supertest');
const express = require('express');

// Mock auth middleware
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  if (token === 'validtoken') {
    req.user = { id: 'user1' }; // Mock user payload
    return next();
  }

  return res.status(400).json({ success: false, message: 'Invalid token' });
};

// Set up the app and route
const app = express();
app.get('/protected', authMiddleware, (req, res) => res.status(200).json({ success: true, message: 'Access granted' }));

describe('Auth Middleware', () => {
  it('should return 401 if no token is provided', async () => {
    const response = await request(app).get('/protected');
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('No token provided');
  });

  it('should return 400 if token is invalid', async () => {
    const response = await request(app).get('/protected').set('Authorization', 'Bearer invalidtoken');
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid token');
  });

  it('should return 200 if token is valid', async () => {
    const response = await request(app).get('/protected').set('Authorization', 'Bearer validtoken');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Access granted');
  });
});
