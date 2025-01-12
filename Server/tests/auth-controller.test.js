const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { registerUser } = require('../controllers/auth/auth-controller');

jest.mock('../models/User');
jest.mock('bcryptjs');

test('registerUser should register a new user', async () => {
  const req = { body: { userName: 'testuser', email: 'test@example.com', password: 'password123' } };
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

  User.findOne = jest.fn().mockResolvedValue(null);
  bcrypt.hash = jest.fn().mockResolvedValue('hashedpassword');
  User.prototype.save = jest.fn().mockResolvedValue({});

  await registerUser(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ success: true, message: 'Registration successful' });
});