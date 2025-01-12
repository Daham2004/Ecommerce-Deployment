const express = require('express');
const request = require('supertest');

// Mock the admin middleware to avoid token validation
const isAdmin = jest.fn((req, res, next) => {
  if (req.headers.authorization === 'Bearer admin-token') {
    return next(); // Proceed if the token is 'admin-token'
  }
  return res.status(403).send('Forbidden'); // Deny access for others
});

const app = express();
app.use(isAdmin);
app.get('/admin', (req, res) => res.send('Admin route'));

describe('Admin Middleware', () => {
  test('should allow access to admin route for admin users', async () => {
    const response = await request(app)
      .get('/admin')
      .set('Authorization', 'Bearer admin-token'); // Simulating an admin user with the correct token
    expect(response.status).toBe(200);
    expect(response.text).toBe('Admin route');
  });

  test('should deny access to admin route for non-admin users', async () => {
    const response = await request(app)
      .get('/admin')
      .set('Authorization', 'Bearer user-token'); // Simulating a non-admin user with an incorrect token
    expect(response.status).toBe(403); // Expecting 'Forbidden' for non-admin users
  });
});
