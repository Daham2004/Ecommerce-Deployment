# Stage 1: Build the React app
FROM node:18.20.5 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Run tests
FROM build AS test
CMD ["npm", "test"]

# Stage 2: Run the React app with Node.js
FROM node:18.20.5

# Set the working directory
WORKDIR /app

# Copy the node_modules and other files from the build stage
COPY --from=build /app /app

# Expose the React app port (default is 3000)
EXPOSE 5173

# Start the React app using npm
CMD ["npm", "run", "dev"]