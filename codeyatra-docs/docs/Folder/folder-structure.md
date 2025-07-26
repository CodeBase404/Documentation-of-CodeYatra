# Folder structure

## 🧾 Project Folder Structure

This document describes the structure of the LeetCode Clone repository. It’s divided into two main folders: `frontend/` and `backend/`, each with a clear modular structure to support scalability and maintainability.

---

## 📦 Root Directory

```
leetcode-clone/
├── backend/
├── frontend/
├── .gitignore
├── README.md
└── package.json (optional root setup)
```

---

## 🔙 Backend Structure (`/backend`)

```
backend/
├── controllers/
│   ├── auth.controller.js
│   ├── problem.controller.js
│   ├── submission.controller.js
│   └── contest.controller.js
│
├── models/
│   ├── user.model.js
│   ├── problem.model.js
│   ├── submission.model.js
│   ├── contest.model.js
│   └── dailyChallenge.model.js
│
├── routes/
│   ├── auth.routes.js
│   ├── problem.routes.js
│   ├── submission.routes.js
│   └── contest.routes.js
│
├── middlewares/
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   └── rateLimiter.js
│
├── utils/
│   ├── judgeClient.js
│   ├── cloudinary.js
│   └── otpGenerator.js
│
├── config/
│   └── db.js
│
├── .env
├── app.js
├── server.js
└── package.json
```

### ✅ Highlights:

* `controllers/`: Business logic for each route
* `models/`: Mongoose schemas
* `routes/`: Express route declarations
* `middlewares/`: Auth, validation, rate-limiting
* `utils/`: Helper libraries like Judge0 client
* `config/`: DB and Redis connection

---

## 🎨 Frontend Structure (`/frontend`)

```
frontend/
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProblemCard.jsx
│   │   └── common/
│   │       └── Loader.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Problems.jsx
│   │   ├── ProblemDetails.jsx
│   │   └── Contest.jsx
│   │
│   ├── features/
│   │   ├── auth/
│   │   ├── problems/
│   │   └── submissions/
│   │
│   ├── services/
│   │   └── api.js (Axios config)
│   │
│   ├── store/
│   │   └── index.js (Redux Toolkit)
│   │
│   ├── hooks/
│   │   └── useAuth.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── vite.config.js
└── package.json
```

### ✅ Highlights:

* `components/`: Reusable UI pieces
* `pages/`: Top-level pages/routes
* `features/`: Logic grouped by domain (Redux slices, hooks, etc.)
* `services/`: Axios client for API calls
* `store/`: Redux store setup

---

## 📘 Suggested Folder Conventions

| Folder      | Purpose                               |
| ----------- | ------------------------------------- |
| `features/` | Feature-based Redux logic separation  |
| `hooks/`    | Custom reusable React hooks           |
| `utils/`    | Pure JS utilities (if any)            |
| `common/`   | Atomic UI components (Button, Loader) |

---

Let me know to continue with `code-style.md` next?
