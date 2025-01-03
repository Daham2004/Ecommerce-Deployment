# E-commerce Project

This is a full-stack e-commerce project with a React frontend and a Node.js backend. The project uses MongoDB as the database and is containerized using Docker.

## Project Structure
![image](https://github.com/user-attachments/assets/2e586c9f-1157-4bac-b8d9-8707836b44a0)




## Setup

### Prerequisites

- Docker
- Docker Compose
- Node.js
- npm

### Running the Project

1. **Using Docker Compose**

   To run the project using Docker Compose, navigate to the project root directory and run:

   ```sh
   docker-compose up --build
   
This will build and start both the client and server services.

./up.sh

This script will navigate to the Client and Server directories, install the dependencies, and start both the client and server.

Environment Variables
Make sure to set the following environment variables in the docker-compose.yml file:

MONGO_URI: The connection string for your MongoDB database.

Technologies Used
*Frontend:
React, Tailwind CSS, Vite
*Backend:
Node.js, Express.js, MongoDB
*Containerization: 
Docker, Docker Compose

