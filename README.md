# Task 4 Management Application

IT-2305
Ubaidullauly Azamat 231244
Atembek Shaimerden 230229
Sayat Temirlan 231383

## Introduction
This is a simple Task Management application built with Node.js, Express, MongoDB, and EJS as the templating engine. The application allows users to register, log in, create, update, delete, and view their tasks. Authentication and authorization are implemented using JWT, and CSRF protection is enabled for security.

## Installation
1. Clone the repository if you are in Github (if not just go to next step):
   ```bash
   git clone https://github.com/ShadowFighterr/Task44
   cd Task44
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
    MONGO_URI=mongodb+srv://temsaykrg:bvjMckrftENEPKq2@cluster1.j33wk.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster1 
    JWT_SECRET=5fb45d5bd7f263f25ab11ec12f4f022202b6c812978cfedfd8ec545b2ede4e48ed224c9e64786029e520ace75231e471a26a0731ffde6394f11d5853feeb39ee
    PORT=5003
   ```

4. Start the application:
   ```bash
   npm start
   ```

5. Open the browser and go to:
   ```
   http://localhost:5003/<endpoints below>
   ```

## Usage
- Register: `/register`
- Login: `/login`
- View Tasks: `/tasks`
- Create Task: `/tasks`
- Edit Task: `/tasks/edit/:id`
- Delete Task: `/tasks/delete/:id`

## Authorization and Token Usage
Most routes (e.g., `/tasks`) are protected by JWT authentication. After logging in, you will receive a JWT token. You need to include this token in the `Authorization` header to access protected routes.

### ✅ How to get a token:
1. Go to `/login` and log in with your email and password.
2. You will receive a token in the response like this:
   ```json
   {"token": "your_jwt_token_here"}
   ```

### ✅ How to use the token (for Postman or API testing):
1. Open [Postman](https://www.postman.com/downloads/).
2. Make a `GET` request to `/tasks` with the token:
   - Go to the **Headers** tab.
   - Add:
     ```
     Authorization: Bearer your_jwt_token_here
     ```

### ✅ How to set token in browser (optional):
You can use a browser extension like [ModHeader](https://modheader.com/) for testing protected routes:
1. Install **ModHeader** extension.
2. Add a new header:
   ```
   Authorization: Bearer your_jwt_token_here
   ```
3. Open `/tasks` in your browser, and it will work.

## Test User Credentials (Optional)
To make testing easier, you can create a user like this:

- **Email:** `test@example.com`
- **Password:** `password123`
- **Role:** `user` or `admin`

Or register your own user at `/register`.

## Features
- User registration and login
- JWT-based authentication
- Task creation, editing, deletion
- User role support (admin/user)
- CSRF protection
- Task filtering, search, and pagination
- EJS template rendering

## Dependencies
- express
- mongoose
- dotenv
- bcryptjs
- jsonwebtoken
- csrf
- cookie-parser
- express-validator
- ejs

## Configuration
Application settings are stored in `.env`:
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `PORT`: Server port

## Deployment
The application is deployed on **Render** and is accessible at:

🔗 **https://backend-ass3-auth.onrender.com**

