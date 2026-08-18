# EDU-HUB — Learning Management System 🎓

A modern **Learning Management System (LMS)** built using the **MERN stack**, designed to provide a complete platform where educators can create and sell courses and students can discover, purchase, and learn from them.

## 🚀 Features

### 👨‍🎓 Student

* Create an account and securely log in.
* Google authentication using Firebase.
* Browse available courses.
* View course details and content.
* Purchase courses securely.
* Access purchased courses.
* Multi-language support for a better learning experience.

### 👨‍🏫 Educator

* Create and manage courses.
* Upload course content.
* Add course information, pricing, and other details.
* Manage published courses.
* Sell courses to students.

### 🔐 Authentication & Security

* Firebase Google Authentication.
* JWT-based authentication.
* Secure user sessions.
* Role-based access for **Students** and **Educators**.

### 💳 Payments

* Integrated **Razorpay** payment gateway.
* Secure online course purchases.
* Payment verification before granting course access.

## 🛠️ Tech Stack

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* JWT

### Database

* MongoDB
* Mongoose

### Authentication

* Firebase Authentication
* JSON Web Tokens (JWT)

### Payment Gateway

* Razorpay

### Other Technologies

* CORS
* Cookie Parser
* dotenv
* REST APIs

## 🏗️ Project Architecture

```text
EDU-HUB
│
├── Frontend
│   └── React.js
│
├── Backend
│   ├── Node.js
│   ├── Express.js
│   └── REST APIs
│
├── Database
│   └── MongoDB
│
├── Authentication
│   ├── Firebase
│   └── JWT
│
└── Payment
    └── Razorpay
```

## 📂 Project Structure

```text
EDU-HUB/
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── ...
│   └── package.json
│
├── server/                 # Node/Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── package.json
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/edu-hub.git
cd edu-hub
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

```bash
cd ../server
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the backend directory and add the required configuration:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

> **Important:** Never commit your `.env` file or expose API keys and secret credentials publicly.

### 5. Start the backend

```bash
npm run dev
```

### 6. Start the frontend

Open another terminal:

```bash
cd client
npm start
```

The application should now be available locally.

## 🔄 How EDU-HUB Works

```text
Student
   │
   ▼
Register / Login
   │
   ▼
Browse Courses
   │
   ▼
Select Course
   │
   ▼
Razorpay Payment
   │
   ▼
Payment Verification
   │
   ▼
Course Access
```

For educators:

```text
Educator
   │
   ▼
Login
   │
   ▼
Create Course
   │
   ▼
Upload Course Content
   │
   ▼
Publish Course
   │
   ▼
Students Purchase Course
```

## 🌟 Key Highlights

* Full-stack MERN application
* Student and Educator role management
* Google authentication
* JWT-based authorization
* Online course purchasing
* Razorpay payment integration
* MongoDB database
* RESTful backend APIs
* Multi-language support
* Responsive and user-friendly interface


## 🔮 Future Improvements

* Live classes and video conferencing
* Course ratings and reviews
* Progress tracking
* Certificates after course completion
* Wishlist functionality
* Notifications
* Admin dashboard
* Advanced course recommendations
* AI-powered learning assistance

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Push the branch.
6. Create a Pull Request.

## 📄 License

This project is developed for educational and learning purposes.

## 👨‍💻 Developer

**Akshay Jain**

MCA Integrated — IIPS, DAVV Indore

---

⭐ If you found this project useful, consider giving the repository a **star**!
