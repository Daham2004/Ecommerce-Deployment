# E-commerce Project

This E-commerce project is a comprehensive full-stack application designed to enhance your online shopping experience. Utilizing the MERN stack (MongoDB, Express.js, React, Node.js), it incorporates Redux Toolkit for effective state management and Tailwind CSS for a modern, responsive design. This project provides a powerful platform for both users and administrators, featuring essential functionalities for a smooth and efficient shopping experience. The application is containerized using Docker and Docker Compose, ensuring easy deployment and scalability.

![image.alt](https://github.com/Plymouth-University/coursework-group_41/blob/07b5b45f13548a411dd03dbd0aa3f8c4ff96038f/Screenshot%202025-01-12%20085104.png)

![image.alt](https://github.com/Plymouth-University/coursework-group_41/blob/c2fe8e5d5c3d089c5f65d392caced9607e5a9665/Screenshot%202025-01-12%20085155.png)

![image.alt](https://github.com/Plymouth-University/coursework-group_41/blob/aaa13cec68966935dd20784a3bc88e4a270b99b8/Screenshot%202025-01-12%20085346.png)


# Features

## User

### Product Reviews
- Write reviews.
- Instant ratings and star percentages.


### Order Management
- Create new orders and view order history.

### Profile Management
- Manage email, username, and multiple addresses.

### Shopping Cart
- Add products, adjust quantities, and view subtotals.

---

## Admin

### Product Management
- Add, edit, delete, and soft-delete products.
- Manage product attributes like name, description, and stock.

### Order Management
- View and update order details and status.

---

## Security & User Experience

### Secure Authentication
- Login, signup, and logout.

### Intuitive Interface
- Powered by Tailwind CSS for a modern, responsive, and user-friendly experience.

---

## Scalability

### Built for Growth
- Scalable architecture to handle increasing user demands.

### Containerization
- Docker and Docker Compose for easy deployment and scalability.


# Project Setup
## Clone the Project
Clone the repository using the following command:

git clone https://github.com/Plymouth-University/coursework-group_41.git


## Navigate to the Project Directory
Change to the project directory:

cd coursework-group_41


## Option 1: Running the Project with Docker Compose
Ensure Docker and Docker Compose are installed and running on your machine.

Start the services using Docker Compose:

docker-compose up --build

This will start both the client and server services as defined in the `docker-compose.yml` file. The client will be accessible at [http://localhost:5173](http://localhost:5173) and the server at [http://localhost:5000](http://localhost:5000).

## Option 2: Running the Project without Docker

### Install Dependencies for Frontend and Backend Separately
**Tip:** To efficiently install dependencies for both frontend and backend simultaneously, use split terminals.

### Install Frontend Dependencies
Navigate to the client directory and install dependencies:

cd client

npm install



### Start the Backend Server
Navigate to the server directory:

cd server

Start the server:

npm run dev


### Start the Frontend Client
Open a new terminal and navigate to the client directory:

cd client

Start the client:

npm run dev







              
