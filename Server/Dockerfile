# Use Node.js as the base image
FROM node:18.20.5 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Run tests
FROM build AS test
CMD ["npm", "test"]

# Expose the port
EXPOSE 5000

# Start the server
CMD ["npm", "run", "dev"]
