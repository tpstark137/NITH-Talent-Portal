# NITH Talent Portal

The NITH Talent Portal is a MERN-based web application that allows students to view both on-campus and off-campus job postings, apply to jobs, and receive automated newsletters about new opportunities. The platform provides secure user authentication and profile management, with an intuitive interface powered by React and Tailwind CSS.

## Features

- **Job Listings**: Students can browse and apply for on-campus and off-campus job opportunities.
- **Automated Newsletters**: Implemented using Node Cron to automatically send emails with the latest job postings.
- **User Authentication**: Secure login, registration, and profile management with JWT-based authentication.
- **State Management**: Efficient state handling using Redux and Redux Toolkit for smooth application performance.
- **Responsive UI**: Designed with React and Tailwind CSS for a modern, mobile-responsive interface.

## Tech Stack

### Backend

- **Node.js**: Backend framework
- **Express.js**: Web server for handling API requests
- **MongoDB**: NoSQL database for managing users, jobs, and applications
- **bcrypt**: For password hashing
- **cloudinary**: For image upload and management
- **cookie-parser**: To handle cookies in requests
- **cors**: To enable Cross-Origin Resource Sharing
- **dotenv**: For environment variable management
- **express-fileupload**: For handling file uploads
- **jsonwebtoken**: For creating and verifying JWTs for authentication
- **mongoose**: For interacting with MongoDB
- **node-cron**: For scheduling automated newsletters
- **nodemailer**: For sending emails to users
- **validator**: For data validation

### Frontend

- **React**: Component-based frontend library
- **React DOM**: For rendering React components in the browser
- **React Redux**: For global state management
- **React Router DOM**: For handling navigation and routing
- **React Spinners**: For displaying loading indicators
- **React Toastify**: For displaying notifications and alerts
- **Axios**: For making HTTP requests to the backend
- **Tailwind CSS**: For building responsive and modern UI

## Installation

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nith-talent-portal.git
   cd nith-talent-portal
   ```
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Create a `.env` file in the `backend` folder and configure the following environment variables:
   ```env
   PORT=
   MONGO_URI=
   FRONTEND_URL=
   JWT_SECRET_KEY=
   JWT_EXPIRE=
   COOKIE_EXPIRE=
   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_SECRET=
   CLOUDINARY_API_KEY=
   SMTP_SERVICE=
   SMTP_MAIL=
   SMTP_PASSWORD=
   SMTP_HOST=
   SMTP_PORT=
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the `frontend` folder and install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

- Users [Job Seeker] can register, login, view jobs, and apply.
- Employer can post and manage job listings.
- Automated newsletters are sent to users regarding the latest job postings.

## License

This project is licensed under the MIT License.
