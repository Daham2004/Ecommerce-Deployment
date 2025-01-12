const request = require('supertest');
const express = require('express');

// Mock user model
const User = {
  findOne: jest.fn(),
  create: jest.fn(),
};

// Mock controller
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(200).json({
      success: false,
      message: 'User Already exists with the same email! Please try again',
    });
  }

  await User.create({ userName, email, password });
  return res.status(200).json({
    success: true,
    message: 'Registration successful',
  });
};

const app = express();
app.use(express.json());
app.post('/register', registerUser);

describe('User Registration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should register a new user', async () => {
    User.findOne.mockResolvedValue(null); // Simulate no existing user
    User.create.mockResolvedValue({
      userName: 'testuser',
      email: 'test@example.com',
      password: 'password123',
    });

    const response = await request(app)
      .post('/register')
      .send({ userName: 'testuser', email: 'test@example.com', password: 'password123' });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Registration successful');
    expect(User.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
    expect(User.create).toHaveBeenCalledWith({
      userName: 'testuser',
      email: 'test@example.com',
      password: 'password123',
    });
  });

  it('should not register a user with an existing email', async () => {
    User.findOne.mockResolvedValue({ userName: 'existinguser', email: 'test@example.com', password: 'password123' });

    const response = await request(app)
      .post('/register')
      .send({ userName: 'newuser', email: 'test@example.com', password: 'password123' });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('User Already exists with the same email! Please try again');
    expect(User.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
    expect(User.create).not.toHaveBeenCalled();
  });
});
