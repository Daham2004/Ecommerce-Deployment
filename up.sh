#!/bin/bash

# Navigate to the Client directory and start the client
cd Client
npm install
npm run dev &

# Navigate to the Server directory and start the server
cd ../Server
npm install
npm run dev &