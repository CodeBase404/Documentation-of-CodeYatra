# FAQ.md

## ❓ Frequently Asked Questions – LeetCode Clone

This section provides answers to common questions related to development, contribution, deployment, and using the LeetCode Clone platform effectively.

---

### 📁 Project Structure

**Q: What are the main parts of the project?**

> The project is divided into two main folders:
>
> * `frontend/`: React-based user interface using Vite.
> * `backend/`: Node.js + Express REST API with MongoDB.

**Q: Can I run frontend and backend separately?**

> Yes. Both are independent apps. Make sure the backend is running before you interact with the frontend.

---

### 🧪 Development & Debugging

**Q: How do I run the app locally?**

> Follow the instructions in `env-setup.md`:
>
> * Install dependencies
> * Set up `.env`
> * Run backend: `npm run dev`
> * Run frontend: `npm run dev`

**Q: How do I test the API?**

> Use Postman or Thunder Client extension in VS Code. You can find all routes in the API Reference section.

**Q: What port does the backend run on?**

> By default: `http://localhost:5000`

**Q: The frontend doesn’t show problems. Why?**

> Check CORS, API base URL in frontend, and whether backend is running correctly.

---

### 🧠 Features

**Q: Does it support code submission like LeetCode?**

> Yes. It integrates with Judge0 API to run and validate code against hidden test cases.

**Q: Is there a contest mode?**

> Yes. You can host timed contests with locked problems and a real-time leaderboard using Socket.IO.

**Q: Can users track solved problems?**

> Yes. The `User` model has a `problemSolved` array that stores IDs of solved problems.

---

### 🧩 Customization

**Q: How do I add a new problem?**

> Use the POST `/api/problems` endpoint as an admin (see problems.md). You can also build an internal UI for problem creation.

**Q: Can I edit or delete problems?**

> Yes, via PUT or DELETE endpoints (`/api/problems/:id`) — admin-only access.

**Q: Can I change the default editor language?**

> Yes. Modify the frontend editor config to set a default language (e.g., JavaScript).

---

### 🌐 Deployment

**Q: Where is the app deployed?**

> * Frontend: [Vercel](https://vercel.com)
> * Backend: [Render](https://render.com)
> * MongoDB: [Atlas](https://cloud.mongodb.com)

**Q: Deployment is failing, what should I check?**

> * CORS setup
> * Environment variables
> * Health check path (`/api/health`)
> * MongoDB whitelist settings

---

### 💬 Contribution

**Q: How do I contribute?**

> Check `how-to-contribute.md`. Clone the repo, make a new branch, and open a PR.

**Q: How do I report a bug or suggest a feature?**

> Open a GitHub issue with proper labels.

---

If your question is still not answered, feel free to [open an issue](https://github.com/your-repo/issues) or ping the maintainers directly.

---

Ready to continue with `changelog.md`?
