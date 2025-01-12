const request = require('supertest');
const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.status(200).send('Hello World!');
});

describe('GET /hello', () => {
  it('responds with Hello World!', async () => {
    const response = await request(app).get('/hello');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});