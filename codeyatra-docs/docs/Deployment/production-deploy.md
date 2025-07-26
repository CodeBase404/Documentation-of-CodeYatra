# Production Deploy

## 🚀 Production Deployment Guide

This document outlines the steps to deploy the LeetCode clone to a production environment using best practices. It assumes you're using **Render**, **Vercel**, **MongoDB Atlas**, and **Cloudinary**, but the steps can be adapted for other platforms (e.g. AWS, Heroku, DigitalOcean).

---

## 🧱 Tech Stack Recap

* **Frontend:** React (Vite), deployed on Vercel
* **Backend:** Node.js + Express, deployed on Render
* **Database:** MongoDB Atlas (cloud)
* **Cloud Storage:** Cloudinary (for video/image uploads)
* **Judge API:** Judge0 (cloud API for code evaluation)
* **Redis:** Render-hosted Redis or Upstash

---

## 🌐 1. Hosting the Frontend (Vercel)

### Steps:

1. Push your frontend code to GitHub.
2. Go to [https://vercel.com](https://vercel.com) → Sign in.
3. Click **New Project** → Import your GitHub repo.
4. Select the frontend folder (e.g. `/frontend`)
5. Set build settings:

   * **Framework**: Vite
   * **Install Command**: `npm install`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
6. Add environment variables from `.env`
7. Deploy 🎉

> ✅ After deployment, Vercel gives you a live frontend URL like `https://leetcode-clone.vercel.app`

---

## 🔁 2. Hosting the Backend (Render)

### Steps:

1. Push your backend code to GitHub.
2. Go to [https://render.com](https://render.com) → Sign in.
3. Click **New → Web Service**
4. Connect your repo and select the backend folder.
5. Choose the following settings:

   * **Environment**: Node
   * **Build Command**: `npm install`
   * **Start Command**: `npm start` or `node server.js`
6. Add Environment Variables (from `.env`)
7. Add a **Health Check Path**: `/api/health`
8. Deploy 🚀

> 🔗 Render gives you a public backend API URL like `https://leetcode-api.onrender.com`

---

## 🗄️ 3. MongoDB Atlas Setup

1. Go to [https://cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a **free cluster**.
3. Add a new **database user** (username/password).
4. Whitelist IP: `0.0.0.0/0` (for global access)
5. Copy connection URI and update `.env`

```env
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/leetcode
```

---

## ☁️ 4. Cloudinary Setup

1. Go to [https://cloudinary.com](https://cloudinary.com) and create an account.
2. Go to **Dashboard** → Copy:

   * Cloud Name
   * API Key
   * API Secret
3. Add them to your `.env` file.

---

## 🧠 5. Judge0 (for Code Evaluation)

You can use the public Judge0 API or host your own.

**Public Judge0 (limited)**

* Sign up: [https://judge0.com](https://judge0.com)
* Get an API Key from RapidAPI
* Add this to `.env`:

```env
JUDGE0_URL=https://judge0-ce.p.rapidapi.com
JUDGE0_API_KEY=your_rapidapi_key
```

---

## 🔐 6. Configure CORS and Proxy

* In the backend, allow requests from your Vercel domain:

```js
const allowedOrigins = ["https://leetcode-clone.vercel.app"];
```

* In frontend Vite config:

```js
proxy: {
  '/api': 'https://leetcode-api.onrender.com'
}
```

---

## 🔍 7. Debugging Deployment Issues

* ❌ Backend 404 → check API path & health route.
* ❌ Vercel build fail → check build command & folder.
* ❌ MongoDB timeout → check IP whitelist & URI.
* ❌ Judge0 issues → use official docs or upgrade plan.

---

## ✅ Final Checklist

* [ ] Frontend live on Vercel
* [ ] Backend live on Render
* [ ] MongoDB Atlas connected
* [ ] Redis and Cloudinary working
* [ ] All environment variables set correctly
* [ ] CORS configured

---

Ready to continue with `how-to-contribute.md`?
