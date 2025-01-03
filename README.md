# E-commerce Project

This is a full-stack e-commerce project with a React frontend and a Node.js backend. The project uses MongoDB as the database and is containerized using Docker.

## Project Structure
E-commerce/
├── Client/
│   ├── .github/
│   │   └── workflows/
│   ├── .gitignore
│   ├── components.json
│   ├── Dockerfile
│   ├── eslint.config.js
│   ├── index.html
│   ├── jsconfig.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── public/
│   ├── README.md
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets/
│   │   ├── components/
│   │   ├── config/
│   │   └── ...
│   ├── tailwind.config.js
│   └── vite.config.js
├── Server/
│   ├── .dockerignore
│   ├── .github/
│   │   └── workflows/
│   ├── .gitignore
│   ├── controllers/
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── common/
│   │   └── shop/
│   ├── Dockerfile
│   ├── helpers/
│   │   ├── cloudinary.js
│   │   └── paypal.js
│   ├── models/
│   │   ├── Address.js
│   │   ├── Cart.js
│   │   ├── Feature.js
│   │   ├── Order.js
│   │   ├── Product.js
│   │   ├── Review.js
│   │   └── User.js
│   ├── package.json
│   ├── routes/
│   └── server.js
├── docker-compose.yml
└── up.sh



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
*Frontend: React, Tailwind CSS, Vite
*Backend: Node.js, Express.js, MongoDB
*Containerization: Docker, Docker Compose

