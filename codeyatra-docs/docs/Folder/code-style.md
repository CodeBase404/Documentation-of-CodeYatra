# code-style.md

## 🧑‍💻 Code Style Guide

To ensure a clean, consistent, and maintainable codebase across the LeetCode Clone project, follow this code style guide for both the frontend and backend. It aligns with modern JavaScript/TypeScript and React standards.

---

## 🛠 Tools and Linters

| Tool         | Purpose                          |
| ------------ | -------------------------------- |
| ESLint       | Enforce JS/TS style rules        |
| Prettier     | Auto-formatting                  |
| EditorConfig | Cross-editor consistency         |
| Husky        | Git hooks for linting on commit  |
| Lint-Staged  | Run linters only on staged files |

---

## 📦 Project-wide Conventions

### 📁 Folder Naming

* Use **kebab-case** for folders: `problem-details`, `daily-challenge`
* Group by feature in `features/`, `pages/`, `components/`

### 📄 File Naming

* Use **PascalCase** for React components: `ProblemCard.jsx`
* Use **camelCase** for utility/helper files: `useAuth.js`, `apiClient.js`

---

## 🧼 JavaScript & React Style Rules

### ✅ General

* Prefer `const` over `let` whenever possible
* Use arrow functions: `const add = () => {}`
* Avoid `var`

### ✅ Import Ordering

```js
// Third-party
import React from "react";
import axios from "axios";

// Local
import ProblemCard from "@/components/ProblemCard";
import useAuth from "@/hooks/useAuth";
```

### ✅ Component Format

```jsx
const ProblemCard = ({ title, difficulty }) => {
  return (
    <div className="p-4 rounded shadow">
      <h3>{title}</h3>
      <p>{difficulty}</p>
    </div>
  );
};

export default ProblemCard;
```

### ✅ Prop Destructuring

Always destructure props:

```jsx
// ❌ Bad
const ProblemCard = (props) => <div>{props.title}</div>;

// ✅ Good
const ProblemCard = ({ title }) => <div>{title}</div>;
```

---

## 🌐 Backend (Node.js + Express)

### ✅ File Naming

* Use **camelCase** for filenames and variables
* Use **PascalCase** for Mongoose models: `User`, `Problem`

### ✅ Code Structure

* Follow MVC structure: controllers, models, routes
* Error handling via `try/catch` and centralized middleware
* Modularize repeated logic into `utils/`

### ✅ Sample Controller

```js
exports.getAllProblems = async (req, res, next) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (err) {
    next(err);
  }
};
```

---

## 🔄 Prettier Configuration

```json
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

---

## ✅ Git Hook Suggestions (via Husky)

* `pre-commit`: Lint and format staged files

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

---

## 🧠 Best Practices Summary

* Keep functions pure and small
* Follow DRY (Don't Repeat Yourself)
* Prefer async/await over callbacks
* Use `.env` for secrets and configs
* Add JSDoc-style comments for exported functions

---

Ready for `FAQ.md` next? 😊
