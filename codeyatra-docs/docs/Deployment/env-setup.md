# env-setup.md

## 🛠️ Environment Setup Guide

This guide walks you through setting up the development environment for the LeetCode Clone project. It includes all necessary tools, dependencies, environment variables, and project initialization steps.

---

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

### 1. **Node.js** (v18+)

* Install from [https://nodejs.org](https://nodejs.org)
* Verify with: `node -v`

### 2. **npm** or **yarn**

* Comes with Node.js
* Verify with: `npm -v` or `yarn -v`

### 3. **MongoDB** (locally or cloud)

* Local: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
* Cloud: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### 4. **Redis** (for rate limiting & caching)

* Local: [https://redis.io/download](https://redis.io/download)
* Alternatively, use Docker or Redis Cloud

### 5. **Cloudinary Account** (for media upload in editorial)

* Sign up at [https://cloudinary.com](https://cloudinary.com)

### 6. **Postman** (for testing APIs)

* [https://www.postman.com/downloads](https://www.postman.com/downloads)

### 7. **VS Code** (Recommended Editor)

* [https://code.visualstudio.com/](https://code.visualstudio.com/)

---

## 📁 Clone the Repository

```bash
git clone https://github.com/your-username/leetcode-clone.git
cd leetcode-clone
```

---

## 📦 Install Dependencies

### For Backend:

```bash
cd backend
npm install
```

### For Frontend:

```bash
cd frontend
npm install
```

---

## 🔐 Setup Environment Variables

Create a `.env` file in the `backend/` directory and include the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REDIS_URL=redis://localhost:6379
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

If using the judge API (e.g. Judge0):

```env
JUDGE0_URL=https://judge0-api-url.com
JUDGE0_API_KEY=your_judge0_api_key
```

---

## ▶️ Run the Development Server

### Backend:

```bash
cd backend
npm run dev
```

### Frontend:

```bash
cd frontend
npm run dev
```

The app should now be running at:

* Frontend: `http://localhost:3000`
* Backend API: `http://localhost:5000`

---

## 🧪 Test Setup

Use Postman to hit endpoints and validate:

* Register/Login APIs
* Get all problems
* Submit code

---

## 🧩 Tips

* Use `nodemon` for live-reloading backend.
* Use `.env.local` for secrets you don’t want in version control.
* Use MongoDB Compass for GUI DB access.

---

Next file: `production-deploy.md`?
