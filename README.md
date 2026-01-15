# 🚀 Premium MERN Fitness Tracker

A modern, high-performance Fitness Tracker application built with the MERN stack (MongoDB, Express, React, Node.js). This app features a sleek "Glassmorphism" UI, secure authentication, and a fully responsive design.

## ✨ Key Features

-   **💎 Premium UI/UX**: Stunning "Glassmorphism" design with smooth micro-animations and interactive elements.
-   **🔐 Secure Authentication**: JWT-based auth with a custom "Profile" dropdown and password visibility toggle.
-   **👤 User Profiles**: personalized experience with user name and email tracking.
-   **📊 Workout Management**: Track Cardio, Supplements, Exercises, and Weight Lifting with ease.
-   **📱 Fully Responsive**: Optimized for all devices, from desktop to mobile.

## 🛠️ Built With

-   **Frontend**: React, React Router, CSS3 (Custom Glassmorphism)
-   **Backend**: Node.js, Express
-   **Database**: MongoDB Atlas
-   **Auth**: JWT (JSON Web Tokens) & Bcrypt

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/waqasjafri512/Fitness-tracker.git
cd MERN_Fitness_tracker_app
```

### 2. Backend Setup
1. Enter the `backend` folder: `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example`:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   SECRET=your_jwt_secret_key
   ```
4. Start the server: `npm run dev`

### 3. Frontend Setup
1. Enter the `frontend` folder: `cd ../frontend`
2. Install dependencies: `npm install`
3. Start the React app: `npm start`

## 🌐 Deployment to Vercel

### 1. Project Configuration
This project is configured as a MERN Monorepo for Vercel. Use the following settings during deployment:

- **Build Command**: `cd frontend && npm install && npm run build`
- **Output Directory**: `frontend/build`
- **Install Command**: `npm install` (root level)

### 2. Environment Variables
Add these keys in your Vercel Project Settings:
- `MONGO_URI`: Your MongoDB Atlas connection string
- `SECRET`: Your JWT secret key
- `PORT`: 4000 (standard for this app)

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
