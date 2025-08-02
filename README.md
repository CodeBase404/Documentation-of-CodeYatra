---
title: What is This Project?
description: Overview of the LeetCode-like coding platform built using the MERN stack.
sidebar_label: What is This?
---

# What is This Project?

This project is a **LeetCode-inspired coding platform** built to practice algorithmic problems, run coding contests, and simulate real interview environments.

## 🧠 Who’s it for?

- **Developers** preparing for coding interviews.
- **Teachers** running timed coding assessments.
- **Students** learning DSA in a gamified way.
- **Hackathon/Club admins** who want to host live contests.

---

## 🔥 Features

- 🧾 Problem Listing with filtering
- 👨‍💻 Code Editor (Monaco) with multiple language templates
- 🧪 Custom + Hidden Test Cases
- 🧠 Auto Evaluation with Judge0
- 🏆 Contest Mode with Lock & Timer
- 📊 Real-Time Leaderboard (via Socket.IO)

---

## ⚙️ Stack Overview

| Layer      | Tech                      |
|------------|---------------------------|
| Frontend   | React, Tailwind CSS       |
| Backend    | Node.js, Express          |
| Database   | MongoDB                   |
| Code Judge | Judge0 API                |
| Realtime   | Socket.IO                 |
| Hosting    | Vercel + Render/Fly.io    |

----

## 🎯 Vision

This platform helps you learn how to build **scalable full-stack systems**, implement **code runners**, and understand **system design patterns** — all in one project!

---

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

Next Steps:
→ Head over to [Getting Started](../Getting-Started/prerequisites.md) to set up your dev environment.

---
title: Prerequisites
description: Technologies and tools you need before setting up the project
sidebar_label: Prerequisites
---

# 🧰 Prerequisites

Before you set up and run this LeetCode-like coding platform locally, ensure you have the following tools and accounts ready.

---

## 🖥️ System Requirements

- **OS:** Windows, macOS, or Linux
- **RAM:** 8GB minimum (16GB recommended)
- **Disk:** At least 2GB free

---

## 🔧 Tools to Install

| Tool | Version | Purpose |
|------|---------|---------|
| [Node.js](https://nodejs.org/) | 18.x or higher | Backend & frontend build |
| [MongoDB](https://www.mongodb.com/try/download/community) | 6.x or Atlas Cloud | Database |
| [Git](https://git-scm.com/) | Latest | Cloning repo, version control |
| [VS Code](https://code.visualstudio.com/) | Latest | Code editor |
| [Postman](https://www.postman.com/) *(optional)* | - | Testing APIs |

---

## 🌐 Accounts You’ll Need

| Platform | Why Needed |
|----------|------------|
| [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) | If you don’t want to run MongoDB locally |
| [Judge0 API](https://judge0.com/) | For code execution |
| [Cloudinary](https://cloudinary.com/) *(optional)* | Hosting videos in Editorials |
| [GitHub](https://github.com/) | For contributing / version control |
| [Vercel](https://vercel.com/) / [Render](https://render.com/) | Deployment (Frontend / Backend) |

---

## 📦 Recommended VS Code Extensions

- **Prettier** – Code formatter
- **ESLint** – Linting for JS/React
- **Tailwind CSS IntelliSense** – Class autocomplete
- **MongoDB for VS Code** – View and manage database easily
- **REST Client** *(optional)* – Make API requests from `.http` files

---

📘 Next: [Installation →](./1.Installation.md)

---
title: Installation Guide
description: Step-by-step setup instructions for running the platform locally
sidebar_label: Installation
---

# ⚙️ Installation Guide

This guide will help you set up the LeetCode-like coding platform on your local machine.

---

## 📂 Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/your-leetcode-clone.git
cd your-leetcode-clone
```

## 📂Step 2: Project Structure
Your project should look like this:

your-leetcode-clone/
├── client/        # React frontend
├── server/        # Node.js + Express backend
├── docs/          # Documentation (Docusaurus)
└── README.md

---

## 📦 Step 3: Install Dependencies

### Install frontend dependencies:

```bash
cd client
npm install
```

---

## 📦 Step 3: Install Dependencies

### Install backend dependencies:

```bash
cd ../server
npm install
```

---

## 🔑 Step 4: Set Up Environment Variables

### Create .env files for both frontend and backend.
/server/.env

```bash
MONGODB_URI=your-mongodb-uri
JUDGE0_API_URL=https://judge0-api-url
JUDGE0_API_KEY=your-judge0-key
JWT_SECRET=your-secret-key
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

/client/.env
```
VITE_BACKEND_URL=http://localhost:5000
```

## 🚀 Step 5: Run the Application
Start the backend
### Start the backend

```bash
cd server
npm run dev
```

### Start the frontend
```
cd ../client
npm run dev
```

Now open your browser and visit:

👉 http://localhost:5173

---

📘 Next: [Explore Features →](./1.Problem-listing.md)

---
title: Problem Listing
description: Learn how coding problems are listed, filtered, searched, and accessed.
sidebar_label: Problem Listing
---

# 🧾 Problem Listing

The **Problem Listing** page is the central place where users can browse, search, and filter coding problems by difficulty, tags, and status.

It mimics platforms like **LeetCode** and is designed to give a clean, intuitive interface for solving problems efficiently.

---

## 🧠 Core Features

### 🔍 1. Search Bar

Users can quickly search for problems by title or keywords.

- Supports fuzzy/full-text search
- Connected to MongoDB's text index or regex-based search
- Example: Searching "two sum" shows all problems with related titles or tags

---

### 🎛️ 2. Filters

Multiple filters allow users to narrow down the problem list based on criteria:

| Filter Type | Options |
|-------------|---------|
| Difficulty  | Easy, Medium, Hard |
| Tags        | Array, DP, Graph, Greedy, etc. |
| Status      | Solved, Unsolved |

These filters can be combined using query parameters in the backend.

---

### 📋 3. Problem Table

Each row in the problem list includes:

| Field        | Description |
|--------------|-------------|
| Title        | Problem name (clickable) |
| Difficulty   | Color-coded: 🟢 Easy, 🟡 Medium, 🔴 Hard |
| Tags         | Small tag chips (hover shows tooltip) |
| Status       | ✅ Solved / ❌ Not Solved |
| Premium 🔒 *(optional)* | Visible only for premium users |

---

### ⏳ 4. Sorting Options

Users can sort the table by:

- Difficulty
- Recently added
- Alphabetical order
- Most solved (popularity-based)

---

## ⚙️ Backend Integration

### 🔌 API Endpoint

GET /api/problems
```http
| Param        | Type     | Example                |
| ------------ | -------- | ---------------------- |
| search       | string   | two sum                |
| difficulty`  | string   | easy                   |
| tags         | array    | ["array", "hashmap"]   |
| status       | string   | solved                 |
| sortBy       | string   | difficulty, title      |
```

📘 Next: [Code Editor →](./1.Code-editor.md)

---
title: Code Editor
description: Learn how the in-browser code editor works, including languages, features, and formatting.
sidebar_label: Code Editor
---

# 👨‍💻 Code Editor

The **Code Editor** provides a real-time, in-browser coding experience, built using the **Monaco Editor** — the same editor that powers **VS Code**.

It supports **multiple programming languages**, automatic formatting, custom templates, and integrations with your submission logic.

---

## 🚀 Features Overview

### 🔤 Multi-language Support

- Supports **C++**, **Java**, **JavaScript**, and more
- Each language comes with a **default code template**
- Language selector dropdown lets users switch instantly

### 💡 Default Code Templates

Each problem includes pre-filled starter code depending on the selected language. This helps users focus on logic rather than boilerplate.

Example:

```cpp
// C++
#include <iostream>
using namespace std;

int main() {
    // your code goes here
    return 0;
}
```

### 🧼 Format Code
A ``Format`` button allows users to clean their code:

```js
editorRef.current?.getAction("editor.action.formatDocument")?.run();
````
Alternatively, you can integrate ``Prettier`` for JS-like formatting if needed.

### 🔄 Reset to Default
A Reset button reverts the code to the original template for the selected language:

```
setCode(languageTemplates[selectedLanguage]);
```
Useful when users want a fresh start.

### 👁️ Full Screen Mode
Users can toggle full-screen editing for better focus using a button or shortcut. You can implement this with Tailwind + conditional rendering:

```tsx
<div className={`editor-container ${isFullScreen ? 'fullscreen' : ''}`}>
  <MonacoEditor ... />
</div>
```

### 🧠 Controlled Editor State
The editor uses ``ref`` and ``useEffect`` to dynamically control:

Language mode (``monaco.editor.setModelLanguage``)

Code syncing with state

Editor height resizing

Keyboard shortcuts

###🔌 Integration with Submissions
The editor’s content is extracted using:

```js
const userCode = editorRef.current?.getValue();
```
This code is then sent to the backend via your POST /submit-code API for evaluation through Judge0.

### 🧰 Libraries / Tools Used

| Tool / Library                      | Purpose                           |
| ----------------------------------- | --------------------------------- |
| `@monaco-editor/react`              | Embed the VS Code editor in React |
| `Tailwind CSS`                      | UI layout and responsive design   |
| `Prettier` (optional)               | Format JS code                    |
| `react-select` or native `<select>` | Language selector                 |

📘 Next: [Test Cases →](./3.Test-cases.md)

---
title: Test Cases
description: Learn how test cases are used for validating user code — including visible, hidden, and edge cases.
sidebar_label: Test Cases
---

# ✅ Test Cases

Test cases are used to validate the correctness and performance of the user's submitted code. Each problem includes a set of **visible** and **hidden** test cases to evaluate submissions fairly and efficiently.

---

## 📂 Types of Test Cases

### 👀 Visible Test Cases

- Shown on the problem page.
- Used for user testing via the “Run” button.
- Help users understand the expected input/output format.

Example:

```json
Input: arr = [1, 2, 3]
Output: 6
Explanation: 1 + 2 + 3 = 6
```

### 🙈 Hidden Test Cases
Not shown to the user.

Used only during actual submission.

Help prevent hardcoded solutions and test edge cases.

### 🔧 Structure in Database
Each Problem document contains:
```js
testCases: {
  visible: [
    { input: "1 2", output: "3" },
    ...
  ],
  hidden: [
    { input: "10000 9999", output: "19999" },
    ...
  ]
}
```

### 🧪 Run vs Submit
| Action     | Test Cases Used         | Saved to DB? | Shown to User?    |
| ---------- | ----------------------- | ------------ | --------------    |
| **Run**    | Visible test cases only | ❌ No         | ✅ Yes          |
| **Submit** | Hidden test cases only  | ✅ Yes        | ❌ No           |

### 💡 Why Hidden Test Cases?
Prevent users from hardcoding outputs.

Ensure solutions are efficient and general.

Catch corner cases like:

Empty arrays

Max limits (e.g., 10^5 inputs)

Duplicate values

Large strings

### ✅ Evaluation Logic
Each test case is passed to the code evaluator (e.g., Judge0 API):

```js
testCases.map(tc => ({
  input: tc.input,
  expectedOutput: tc.output
}));
```
The judge0 compares the actual output against the expected output and returns a verdict per test case.

### 🖼️ UI Display (Optional)
Each visible test case is shown in a styled box with:

✅ Pass or ❌ Fail icon

Inputs/Outputs

Execution Time

Hidden test cases verdicts are only shown post-submission.

### ✅ Summary
Test cases are a vital part of the code evaluation pipeline.

Visible: Help users debug during practice.

Hidden: Ensure fairness, efficiency, and real-world readiness.

Backend uses them dynamically based on the action (run or submit).

📘 Next: [Test Cases →](./4.Submission-evaluation.md)

---
title: Submission Evaluation
description: Understand how code submissions are evaluated, judged, and scored.
sidebar_label: Submission Evaluation
---

# 🧠 Submission Evaluation

Once a user submits their solution, the platform runs it against a defined set of **hidden test cases** and returns a detailed **verdict**. This evaluation process ensures that only correct and efficient solutions are accepted.

---

## ⚙️ Evaluation Workflow

### 1. 📤 Code Submission

When the user clicks **Submit**, we collect:
- Selected language (e.g., C++, Java, JS)
- Problem ID
- Submitted code

```ts
POST /api/submit
{
  problemId: "xyz123",
  language: "cpp",
  code: "..."
}
```

### 2. 🧪 Run Against Hidden Test Cases
The backend fetches hidden test cases from the database.

Each test case is passed to the code execution engine (like Judge0).

The user's code is run in a sandboxed environment for safety.

```js
hiddenTestCases.forEach(tc => {
  sendToJudge0({
    code,
    language,
    input: tc.input,
    expectedOutput: tc.output
  });
});
```

### 3. ⚖️ Verdict Calculation
For each test case, we store:

✅ Pass/Fail status

🕒 Execution time

🧠 Memory usage

🧾 Standard output/error

If all hidden test cases pass, verdict = Accepted
Else, verdict = Wrong Answer, TLE, Runtime Error, or Compilation Error

###🧾 Sample Response

```json
{
  status: "Accepted",
  passedCount: 10,
  totalCount: 10,
  runtime: "120ms",
  memory: "14MB",
  testCaseResults: [
    { input: "1 2", expected: "3", output: "3", status: "Pass" },
    ...
  ]
}
```

### 📈 Verdict Types

| Verdict                      | Description                                                |
| ---------------------------- | ---------------------------------------------------------- |
| ✅ Accepted                   | Code passed all hidden test cases                          |
| ❌ Wrong Answer               | Output didn't match expected result                        |
| 🕒 Time Limit Exceeded (TLE) | Took longer than max allowed time per test case            |
| 💥 Runtime Error             | Crashed during execution (e.g., divide by 0, null pointer) |
| 🚫 Compilation Error         | Code failed to compile                                     |

### 📦 Data Stored in DB

In the ``Submission`` model:

```json
{
  userId: "user123",
  problemId: "xyz123",
  code: "...",
  language: "cpp",
  status: "Accepted",
  runtime: "120ms",
  memory: "14MB",
  timeStamp: Date.now()
}
```

### 🏆 Updating User Profile
If verdict = Accepted:

Mark problem as solved in user’s profile.

Update streak, points, or XP.

```js
User.findByIdAndUpdate(userId, {
  $addToSet: { problemSolved: problemId }
});
```

### 🎯 Accuracy & Fairness
Test cases include edge conditions and randomized inputs

Evaluation uses standard I/O for fairness

All code runs in secure (judge0)

### 🖥️ UI Display
Verdict badge (e.g., green for Accepted)

Runtime and memory display

Detailed per-test-case feedback (optional)

```jsx
<SubmissionResult
  status="Accepted"
  runtime="120ms"
  memory="14MB"
  testCaseResults={[...]}
 />
```

📘 Next: [Contest Mode →](./5.Contest-mode.md)

---
title: Contest Mode
description: How timed contests are organized and evaluated in the platform.
sidebar_label: Contest Mode
---

# 🏁 Contest Mode

Contest Mode allows users to participate in **real-time coding competitions** with:
- A fixed **start/end time**
- A curated list of **locked problems**
- A **live leaderboard**
- A **countdown timer**

---

## 🧩 Contest Structure

Each contest has:

| Property         | Description                                   |
|------------------|-----------------------------------------------|
| `name`           | Contest name (e.g., Weekly Challenge #1)      |
| `startTime`      | Start date/time (ISO)                         |
| `endTime`        | End date/time (ISO)                           |
| `problems`       | Array of problem IDs                          |
| `participants`   | List of user IDs                              |
| `type`           | Public / Private                              |

---

### Example Contest Schema (MongoDB)

```ts
{
  _id: "contest123",
  name: "Weekly Code War",
  startTime: "2025-08-01T14:00:00Z",
  endTime: "2025-08-01T15:30:00Z",
  problems: ["p1", "p2", "p3"],
  participants: ["u1", "u2", "u3"],
  type: "public"
}
```

### 🔒 Contest Locking
During the contest:

Problems are locked (not searchable or visible in problem list).

User can only access them via contest dashboard.

Submissions are evaluated only within the contest time.

### ⏳ Timer Logic
Client-side Countdown

```js
const duration = endTime - Date.now();
const timer = setInterval(() => {
  updateCountdown(duration - elapsedTime);
  if (elapsedTime >= duration) clearInterval(timer);
}, 1000);
```

Server-side Guard

```js
Server-side Guard
```

### 🧪 Submitting During Contest
Submissions are evaluated just like regular ones.

Each accepted submission adds points (e.g., +100).

Timestamps are tracked for leaderboard ranking.

#### Submission Schema (extended)

```json
{
  userId: "...",
  problemId: "...",
  contestId: "contest123",
  status: "Accepted",
  timestamp: "2025-08-01T14:12:30Z",
  language: "cpp"
}
```


### 🏆 Leaderboard Logic
#### Ranking Rules:
Sort by number of problems solved

Then by total finish time

Earlier accepted submissions rank higher

#### Example Entry
```js
{
  userId: "u123",
  username: "dev_sonu",
  solvedCount: 3,
  totalTime: "1:02:18",
  solvedProblems: [
    { problemId: "p1", status: "Accepted", time: "00:12:31", language: "cpp" },
    { problemId: "p2", status: "Accepted", time: "00:43:11", language: "java" },
  ]
}
```

### 🔴 Real-Time Features (via Socket.IO)

| Event                | Description                                 |
| -------------------- | ------------------------------------------- |
| leaderboard:update | On new accepted submission                  |
| timer:sync         | Broadcasts current time & remaining seconds |

```js
socket.emit("leaderboard:update", { contestId, updatedUserRank });
```

### 🖥️ UI Components
⏱️ Countdown Timer at top

📄 Locked Problem List (disabled until start)

🧠 Code Editor (with reset/submit)

🏅 Live Leaderboard (highlight self)


📘 Next: [Daily challenge →](./6.Daily-challenge.md)

---
title: Daily Challenge
description: A new problem is assigned every day to encourage consistent practice.
sidebar_label: Daily Challenge
---

# 📅 Daily Challenge

The **Daily Challenge** is a special feature that motivates users to solve one selected problem every day. It's visible on the homepage and rewards users for consistency.

---

## ✨ Key Features

- 📌 One problem assigned per day
- ⏱️ Available for 24 hours (local time)
- ✅ Marked “Solved” upon successful submission
- 📊 Tracks user streaks
- 🧠 Problems span across varying difficulties and topics

---

## 🧠 How it Works

Every midnight (00:00 IST), the system:
1. Picks a problem from the pool (based on tags, difficulty, or rotation)
2. Assigns it as `todayChallenge`
3. Saves that problem for all users for that day

---

### 🔁 Rotation Logic

```ts
const today = new Date().toISOString().split("T")[0];

if (!DailyChallenge.exists({ date: today })) {
  const randomProblem = await Problem.aggregate([{ $sample: { size: 1 } }]);
  await DailyChallenge.create({
    date: today,
    problemId: randomProblem[0]._id,
  });
}
```

### 📦 DailyChallenge Schema (MongoDB)
```json
{
  _id: "daily123",
  date: "2025-07-18",
  problemId: "64a5c8...def"
}

```

### 👤 User Tracking
Each user has a ``dailyChallengeHistory`` array:

```json
{
  _id: "user123",
  name: "Sonu",
  dailyChallengeHistory: [
    { date: "2025-07-17", status: "Solved" },
    { date: "2025-07-18", status: "Unsolved" }
  ]
}
```

#### On successful submission:
```js
if (submission.status === "Accepted" && submission.problemId === todayProblemId) {
  user.dailyChallengeHistory.push({
    date: today,
    status: "Solved"
  });
  await user.save();
}
```

#### 🎨 UI Components
| Component           | Description                      |
| ------------------- | -------------------------------- |
| 🔔 Daily Banner     | Top section of dashboard         |
| 🧠 Problem View     | Opens full problem + code editor |
| ✅ Solved Status     | Green checkmark on completion    |
| 📆 History Calendar | Heatmap view of solved dates     |

### 📤 API Endpoints

``GET /challenge/today`` → returns today’s problem

``POST /challenge/mark-solved`` → updates history

``GET /user/streak`` → returns current streak info

### 🔐 Edge Case Handling
User cannot solve tomorrow’s challenge early

If they skip a day, streak resets

If already solved outside daily challenge, still marked as solved


📘 Next: [Contest Mode →](./7.Leaderboard.md`)

---
title: Leaderboard
description: A real-time leaderboard to showcase top performers in contests and problem-solving.
sidebar_label: Leaderboard
---

# 🏆 Leaderboard

The **Leaderboard** showcases top-performing users based on various metrics like problem-solving accuracy, contest scores, and daily challenge streaks. It's a gamified feature to boost motivation and engagement.

---

## 📊 Types of Leaderboards

| Type            | Description                                    |
|------------------|------------------------------------------------|
| 🔁 Global        | Shows all-time top users across the platform  |
| 🧠 Daily         | Based on activity in the last 24 hours        |
| 🧪 Contest-Based | Dynamic during live contests                  |

---

## 🔥 Features

- 🔄 Real-time updates via WebSocket (for contests)
- 🎯 Filters by tag, difficulty, and time window
- 🎨 Displays avatars, usernames, ranks, and scores
- 🏅 Highlights current user's rank and performance
- 📈 Expandable rows for detailed submission insights

---

## 🧠 How It Works

### 🪙 Scoring Logic (General)

```ts
score = totalAccepted * 10 - totalWrongSubmissions * 2
```

### 🧬 Contest Leaderboard Schema
```json
{
  contestId: "abc123",
  userId: "user123",
  score: 280,
  solved: ["p1", "p3"],
  submissions: [
    {
      problemId: "p1",
      status: "Accepted",
      language: "C++",
      time: "10:23",
    },
    {
      problemId: "p2",
      status: "Wrong Answer",
      language: "Java",
      time: "12:45"
    }
  ],
  finishTime: "00:45:23"
}
```

### 🧠 Real-time Updates (Socket.IO)
Contest room: socket.join(contestId)

On accepted submission:

```js
io.to(contestId).emit("leaderboard:update", updatedLeaderboard);
```

### 🖼️ UI Components
| Component         | Description                             |
| ----------------- | --------------------------------------- |
| 🧑‍💻 Row Card       | Displays rank, name, score, time        |
| 🔄 Live Indicator | Animated icon for real-time contests    |
| ⬇️ Expandable Row | See language, verdict, time per problem |
| 🥇 Top Badge      | Trophy for top 3 ranks                  |
| 🔍 Filter Panel   | Filter by time, tag, difficulty, etc.   |


### 📤 API Endpoints
| Endpoint                       | Description              |
| ------------------------------ | ------------------------ |
| ``GET /leaderboard/global``      | Global top users         |
| ``GET /leaderboard/daily``       | Daily leaderboard        |
| ``GET /contest/:id/leaderboard`` | Live contest leaderboard |
| ``GET /user/:id/leaderboard``    | User's personal rank     |

### 🧪 Example: Leaderboard Row
| Rank | Username      | Score | Time     | Solved |
| ---- | ------------- | ----- | -------- | ------ |
| 🥇 1 | `@sonu_dev`   | 300   | 45:00 ⏱️ | ✅ ✅ ✅  |
| 🥈 2 | `@jane_coder` | 280   | 46:20    | ✅ ✅ ✅  |

-------------
# Authentication API Reference

This document describes all the available endpoints related to user authentication in the LeetCode Clone platform.

---

## 🔐 POST `/api/auth/register`

Registers a new user.

**Request Body:**

```json
{
  "username": "sonu123",
  "email": "sonu@example.com",
  "password": "strongpassword"
}
```

**Response:**

```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "...",
    "username": "sonu123",
    "email": "sonu@example.com"
  },
  "token": "JWT_TOKEN"
}
```

---

## 🔐 POST `/api/auth/login`

Logs in a user and returns a JWT token.

**Request Body:**

```json
{
  "email": "sonu@example.com",
  "password": "strongpassword"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "user": {
    "_id": "...",
    "username": "sonu123"
  },
  "token": "JWT_TOKEN"
}
```

---

## 🔐 GET `/api/auth/me`

Returns currently authenticated user information.

**Headers:**

```
Authorization: Bearer JWT_TOKEN
```

**Response:**

```json
{
  "_id": "...",
  "username": "sonu123",
  "email": "sonu@example.com",
  "role": "user"
}
```

---

## 🔐 POST `/api/auth/forgot-password`

Sends a reset OTP to the user's email.

**Request Body:**

```json
{
  "emailId": "sonu@example.com"
}
```

**Response:**

```json
{
  "message": "OTP sent to email"
}
```

---

## 🔐 POST `/api/auth/reset-password`

Resets the password using the OTP.

**Request Body:**

```json
{
  "emailId": "sonu@example.com",
  "newPassword": "newStrongPassword",
  "otp": "123456"
}
```

**Response:**

```json
{
  "message": "Password reset successful"
}
```

---

📘 Next: [`problems.md`](./problems.md)

# Problems

## 📘 Problems API Documentation

This section provides detailed information about the API endpoints used to interact with coding problems in the platform. These APIs are responsible for retrieving problem listings, details, creation, update, deletion, and filtering. It supports both admin-level and user-level operations.

---

## 🔗 Base URL

```
/api/problems
```

---

## 📂 Endpoints

### 1. **GET `/api/problems`** – Fetch All Problems

**Description:** Retrieves a list of all problems available on the platform, optionally filtered by difficulty, tags, or search.

**Query Parameters:**

* `difficulty` (optional): `easy` | `medium` | `hard`
* `tags` (optional): Comma-separated list of tags
* `search` (optional): Keyword to search in title or description

**Response:**

```json
[
  {
    "_id": "123abc",
    "title": "Two Sum",
    "difficulty": "easy",
    "tags": ["array", "hashmap"],
    "isPremium": false
  },
  ...
]
```

---

### 2. **GET `/api/problems/:id`** – Get Problem Details

**Description:** Fetches the full details of a specific problem by its ID.

**Path Parameters:**

* `id`: Problem's unique ID

**Response:**

```json
{
  "_id": "123abc",
  "title": "Two Sum",
  "description": "Given an array of integers...",
  "difficulty": "easy",
  "tags": ["array", "hashmap"],
  "testCases": [
    { "input": "[2,7,11,15], 9", "output": "[0,1]" }
  ],
  "codeTemplates": {
    "cpp": "",
    "java": "",
    "javascript": ""
  },
  "isPremium": false
}
```

---

### 3. **POST `/api/problems`** – Create a New Problem *(Admin Only)*

**Description:** Allows admin users to create a new problem with full metadata.

**Body:**

```json
{
  "title": "Two Sum",
  "description": "Given an array of integers...",
  "difficulty": "easy",
  "tags": ["array", "hashmap"],
  "codeTemplates": {
    "cpp": "",
    "java": "",
    "javascript": ""
  },
  "testCases": [
    { "input": "[2,7,11,15], 9", "output": "[0,1]" }
  ]
}
```

**Response:**

```json
{
  "message": "Problem created successfully",
  "problemId": "123abc"
}
```

---

### 4. **PUT `/api/problems/:id`** – Update a Problem *(Admin Only)*

**Description:** Updates details of an existing problem.

**Body:** (Same format as POST)

**Response:**

```json
{
  "message": "Problem updated successfully"
}
```

---

### 5. **DELETE `/api/problems/:id`** – Delete a Problem *(Admin Only)*

**Description:** Deletes a problem by its ID.

**Response:**

```json
{
  "message": "Problem deleted successfully"
}
```

---

## 📌 Notes

* Code templates can be empty or partially filled.
* Hidden test cases are evaluated during submission but not exposed to users.
* Support for filtering/search is useful for frontend UI.
* Admin access is required for POST, PUT, DELETE routes.

---

## ✅ Best Practices

* Always validate input fields before submission.
* Use consistent tags to make filtering effective.
* Maintain difficulty levels objectively.
* Separate visible and hidden test cases for fair evaluation.

---

# 📘 Submissions

## Overview

This document defines the API endpoints related to user submissions. It covers how users can submit code, fetch past submissions, and view results of their solution attempts.

---

## Base URL

```
/api/submissions
```

---

## Endpoints

### 1. `POST /`

**Description:** Submit a solution for a problem. Evaluates code against hidden test cases and stores the result.

**Request Body:**

```json
{
  "problemId": "abc123",
  "language": "javascript",
  "code": "function twoSum(nums, target) { ... }"
}
```

**Response:**

```json
{
  "submissionId": "xyz789",
  "status": "Accepted",
  "runtime": "45ms",
  "memory": "12MB",
  "timestamp": "2025-07-18T08:30:00Z"
}
```

---

### 2. `GET /problem/:problemId`

**Description:** Get all submissions by the logged-in user for a specific problem.

**Response:**

```json
[
  {
    "submissionId": "xyz789",
    "status": "Accepted",
    "language": "javascript",
    "runtime": "45ms",
    "memory": "12MB",
    "timestamp": "2025-07-18T08:30:00Z"
  },
  {
    "submissionId": "xyz456",
    "status": "Wrong Answer",
    "language": "javascript",
    "runtime": "60ms",
    "memory": "14MB",
    "timestamp": "2025-07-17T20:45:00Z"
  }
]
```

---

### 3. `GET /:id`

**Description:** Fetch a single submission by ID.

**Response:**

```json
{
  "_id": "xyz789",
  "problemId": "abc123",
  "language": "javascript",
  "code": "function twoSum(...) { ... }",
  "status": "Accepted",
  "runtime": "45ms",
  "memory": "12MB",
  "output": "[0, 1]",
  "timestamp": "2025-07-18T08:30:00Z"
}
```

---

## Notes

* Submissions are evaluated in a sandboxed environment using Judge0 or similar engine.
* Evaluation includes running code against all hidden test cases.
* Only logged-in users can make submissions.

---

## Permissions

| Action                   | Role Required                         |
| ------------------------ | ------------------------------------- |
| Submit Code              | Any Logged-in User                    |
| View Own Submissions     | Any Logged-in User                    |
| View Others' Submissions | Admin Only (for moderation/debugging) |

---

## Related

* [problems.md](./problems.md)
* [users.md](./users.md)

# 📘 Contests

## Overview

This document explains the API endpoints related to contests, allowing users to view contests, participate in them, submit problems during contests, and view leaderboards.

---

## Base URL

```
/api/contests
```

---

## Endpoints

### 1. `GET /`

**Description:** Get a list of all contests.

**Response:**

```json
[
  {
    "_id": "contestId",
    "title": "Weekly Contest 1",
    "startTime": "2025-07-20T15:00:00Z",
    "endTime": "2025-07-20T17:00:00Z",
    "duration": 7200,
    "problems": ["pid1", "pid2"],
    "status": "upcoming"
  },
  ...
]
```

---

### 2. `GET /:id`

**Description:** Get full contest details including problem list.

**Response:**

```json
{
  "_id": "contestId",
  "title": "Weekly Contest 1",
  "description": "A two-hour weekly coding contest.",
  "startTime": "2025-07-20T15:00:00Z",
  "endTime": "2025-07-20T17:00:00Z",
  "duration": 7200,
  "problems": [
    {
      "_id": "pid1",
      "title": "Problem A",
      "difficulty": "easy"
    },
    ...
  ]
}
```

---

### 3. `POST /:contestId/submit`

**Description:** Submit a solution for a contest problem. Requires user to be registered for the contest.

**Request Body:**

```json
{
  "problemId": "pid1",
  "language": "cpp",
  "code": "..."
}
```

**Response:**

```json
{
  "status": "Accepted",
  "runtime": "42ms",
  "submissionTime": "1345"  // seconds from contest start
}
```

---

### 4. `GET /:id/leaderboard`

**Description:** Get leaderboard for a specific contest.

**Response:**

```json
[
  {
    "username": "coder123",
    "score": 2,
    "finishTime": 3600,
    "submissions": {
      "pid1": {
        "status": "Accepted",
        "language": "cpp",
        "time": 1200
      },
      "pid2": {
        "status": "Wrong Answer",
        "language": "cpp",
        "time": 1800
      }
    }
  },
  ...
]
```

---

## Notes

* Users can only view and submit to contests during active windows.
* Submissions outside the contest time are rejected.
* Leaderboards are updated in real-time using Socket.IO.

---

## Permissions

| Action            | Role Required              |
| ----------------- | -------------------------- |
| View Contests     | Any Logged-in User         |
| Submit in Contest | Registered Contestant Only |
| View Leaderboard  | Any Logged-in User         |

---

## Related

* [submissions.md](./submissions.md)
* [users.md](./users.md)

#### 📁 users

##### **1. Register User**

* **POST** `/api/user/register`
* **Description**: Creates a new user account and returns login credentials.
* **Body**:

  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```
* **Response**: `{ token, user }`

##### **2. Login User**

* **POST** `/api/user/login`
* **Body**:

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
* **Response**: `{ token, user }`

##### **3. Logout User**

* **POST** `/api/user/logout`
* **Description**: Clears auth token and ends session.
* **Response**: Success message

##### **4. Get Current User Profile**

* **GET** `/api/user/profile`
* **Auth Required**: ✅
* **Response**:

  ```json
  {
    "_id": "string",
    "name": "string",
    "email": "string",
    "avatarUrl": "string",
    "problemsSolved": ["problemId"],
    "contestStats": {...}
  }
  ```

##### **5. Update Profile**

* **PUT** `/api/user/profile`
* **Auth Required**: ✅
* **Body**:

  ```json
  {
    "name": "string",
    "avatarUrl": "string"
  }
  ```
* **Response**: Updated user object

##### **6. Send Password Reset OTP**

* **POST** `/api/user/send-otp`
* **Body**:

  ```json
  {
    "emailId": "string"
  }
  ```
* **Response**: OTP sent to registered email

##### **7. Reset Password**

* **POST** `/api/user/reset-password`
* **Body**:

  ```json
  {
    "emailId": "string",
    "newPassword": "string"
  }
  ```
* **Response**: Success message

##### **8. Get All Users (Admin Only)**

* **GET** `/api/user/all`
* **Permissions**: Admin
* **Response**: List of all user profiles with optional filters (e.g., by role, registration date, etc.)

---
# System Overview

This document provides a high-level overview of the system architecture for the LeetCode Clone project. It describes the key components, how they interact, and the overall technology stack.

## 🎯 Objective

To create a full-stack coding platform where users can:

* Browse and solve coding problems
* Participate in contests
* View real-time leaderboards
* Track submissions and performance
* Access daily challenges

## 🏗️ Architecture Summary

The system is divided into three main parts:

```
Client (React.js)  ⇄  Server (Node.js + Express)  ⇄  MongoDB
                                     ⇅
                            Judge0 API (for code execution)
                                     ⇅
                            Cloudinary (for video/image)
```

## 🔧 Technologies Used

| Layer       | Technology                  |
| ----------- | --------------------------- |
| Frontend    | React.js, Tailwind CSS      |
| Backend     | Node.js, Express.js         |
| Database    | MongoDB, Mongoose ORM       |
| Auth        | JWT (JSON Web Tokens)       |
| Code Judge  | Judge0 API                  |
| Cloud Media | Cloudinary                  |
| Docs        | Docusaurus                  |
| Realtime    | Socket.IO (for leaderboard) |

## ⚙️ Core Components

### 1. **Client**

* Developed using **React + Vite**
* Provides user-friendly UI for problem solving, contests, editor, and profile
* Interacts with backend via REST APIs
* Uses localStorage for temporary storage (e.g., code drafts)

### 2. **Server**

* Built with **Express.js**
* Handles user authentication, problem APIs, submission flow, and contest logic
* Integrates with Judge0 for code execution
* Emits real-time leaderboard updates using **Socket.IO**

### 3. **Database**

* **MongoDB** is used for storing:

  * User data
  * Problem metadata and test cases
  * Submissions
  * Contests and leaderboard history

### 4. **External Services**

* **Judge0 API**: Executes user code securely in different languages
* **Cloudinary**: Hosts editorial and tutorial videos

## 🔁 Data Flow Example (Problem Submission)

1. User writes code and hits "Run/Submit"
2. Client sends request to `/api/submissions`
3. Backend calls Judge0 API and awaits response
4. Once execution result is received:

   * It is compared with hidden test cases
   * Stored in MongoDB
   * Leaderboard (if in contest) is updated via socket
5. Client receives and displays result

## ✅ Key Features

* Full problem CRUD system for admins
* Real-time leaderboard for contests
* Rich code editor with themes and language support
* Daily coding challenges with tracking
* Secure JWT-based authentication

---

📘 Next: [`backend.md`](./backend.md)

# Backend Architecture

This document explains the structure, modules, and responsibilities of the backend system powering the LeetCode Clone platform.

## 🧠 Responsibilities

The backend is responsible for:

* User authentication and authorization
* Managing problems, submissions, contests, and users
* Code execution via Judge0 API
* Real-time event handling (e.g., live leaderboard)
* Data persistence with MongoDB
* Media management through Cloudinary

## 🚀 Tech Stack

| Feature        | Technology         |
| -------------- | ------------------ |
| Framework      | Node.js + Express  |
| Database       | MongoDB + Mongoose |
| Auth           | JWT                |
| Code Execution | Judge0 API         |
| Realtime Comm. | Socket.IO          |
| File Uploads   | Cloudinary         |

## 📂 Folder Structure

```bash
backend/
├── controllers/       # Route logic
├── models/            # Mongoose schemas
├── routes/            # API endpoints
├── middlewares/       # Custom auth & error handlers
├── services/          # External API logic (e.g., Judge0, Cloudinary)
├── sockets/           # Real-time event handlers
├── utils/             # Helper functions
└── index.js           # Entry point
```

## 🔐 Authentication

* Uses JWT for stateless auth
* Access tokens stored on frontend (usually in localStorage)
* `authMiddleware` protects private routes

## 📌 Major Modules

### 1. **Auth**

* Register, login, logout
* Password reset with OTP (email-based)
* Middleware to validate user tokens

### 2. **Problems**

* CRUD operations for problems (admin only)
* Supports problem description, constraints, examples, and test cases
* Code templates per language

### 3. **Submissions**

* Accepts code submission
* Sends it to Judge0 for execution
* Compares result with hidden test cases
* Stores verdict, runtime, memory in DB

### 4. **Contests**

* Contest creation (admin)
* Fetch contest problems by ID
* Handles locking/unlocking during contest
* Submission timestamps and scoring

### 5. **Leaderboard**

* Calculates real-time contest scores
* Emits updates via Socket.IO
* Tracks who solved what and when

### 6. **Daily Challenges**

* Picks 1 random problem daily
* Tracks which user solved which challenge and when

## 🧪 Testing & Error Handling

* Try/catch blocks with structured error messages
* Global error handler middleware
* Input validation using `zod` or custom schemas

## 📡 External API Integration

### 🧮 Judge0

* Handles safe, sandboxed code execution
* Sends language, code, input → gets output + status

### ☁️ Cloudinary

* Used for uploading & serving editorial/tutorial videos
* Integrates with Cloudinary SDK to upload from backend

---

📘 Next: [`frontend.md`](./frontend.md)

# Frontend Architecture

This document explains the structure and technologies used in the frontend of the LeetCode Clone project. It is designed for both contributors and developers to understand the user-facing components and how they interact with the backend.

## ⚛️ Tech Stack

* **Framework**: React.js (with Vite for fast bundling)
* **Styling**: Tailwind CSS + ShadCN UI + Lucide Icons
* **Routing**: React Router DOM
* **State Management**: Redux Toolkit + React Context
* **Form Handling**: React Hook Form + Zod validation
* **Markdown**: ReactMarkdown (for rendering editorial/descriptions)
* **Code Editor**: Monaco Editor
* **Realtime**: Socket.IO (leaderboard)

## 📁 Folder Structure (Simplified)

```bash
src/
├── assets/         # Static files (icons, images)
├── components/     # Shared reusable components
├── features/       # Redux slices (auth, problems, contests, etc.)
├── pages/          # Main routes/pages (Home, Problem, Contest, etc.)
├── routes/         # Route config for navigation
├── services/       # API calls (axios clients)
├── utils/          # Helper functions, constants
├── hooks/          # Custom React hooks
└── App.jsx         # Entry point
```

## 🧩 Major Components

### 1. **Problem List UI**

* Displays all problems with filters (difficulty, tags, status)
* Uses search, sorting, and pagination
* Accessible from sidebar navigation

### 2. **Code Editor**

* Monaco Editor with language support (C++, Java, JavaScript)
* Theme switching (light/dark)
* Run & Submit buttons
* Displays input/output/console
* Auto-formatting support

### 3. **Problem Details Page**

* Description shown in ReactMarkdown
* Tabs for Editorial, Submissions, Discussion
* Integrated video editorials from Cloudinary

### 4. **Contests Page**

* Lists upcoming & ongoing contests
* Countdown timer
* Contest Rules and Overview UI

### 5. **Leaderboard Page**

* Real-time updates via Socket.IO
* Shows user scores, time, language, and status

### 6. **Auth Pages**

* Login, Register, Forgot Password
* JWT stored in localStorage
* Protected routes using auth middleware

### 7. **Daily Challenge Page**

* Shows today’s question with indicator if solved
* Tracked in user’s history

## 📡 API Integration

* All APIs are prefixed with `/api/*`
* Uses Axios instance with JWT token in headers
* Displays loading state, error messages via Toasts

## 🌐 Theming & Responsiveness

* Responsive layouts using Tailwind’s grid & flex utilities
* Theme toggle (light/dark) with context
* Mobile-friendly sidebar and modals

## 🔐 Route Protection

* Authenticated routes handled with a `PrivateRoute` wrapper
* Admin-only routes hidden from normal users

---

📘 Next: [`database.md`](./database.md)

# Database Architecture

This document provides an overview of the database schema and design choices used in the LeetCode Clone project. The database plays a crucial role in managing user data, problem metadata, submissions, contests, and real-time leaderboards.

## 📦 Database Used

* **MongoDB**: A NoSQL, document-based database
* **ODM**: Mongoose (Object Data Modeling for Node.js)

## 📁 Collections Overview

### 1. **Users**

Stores all registered users, their profile information, progress, and roles.

**Fields:**

```json
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (hashed),
  role: "user" | "admin",
  problemSolved: [problemId],
  dailyChallengeHistory: [
    {
      date: String,
      status: "solved" | "unsolved"
    }
  ],
  createdAt: Date,
  updatedAt: Date
}
```

### 2. **Problems**

Stores coding problems, tags, difficulty, and both visible and hidden test cases.

**Fields:**

```json
{
  _id: ObjectId,
  title: String,
  slug: String,
  description: String (Markdown),
  difficulty: "Easy" | "Medium" | "Hard",
  tags: [String],
  testCases: [
    {
      input: String,
      output: String,
      isHidden: Boolean
    }
  ],
  solutionVideo: String (Cloudinary URL),
  createdAt: Date,
  updatedAt: Date
}
```

### 3. **Submissions**

Records every code submission made by users, including language and results.

**Fields:**

```json
{
  _id: ObjectId,
  userId: ObjectId,
  problemId: ObjectId,
  language: String,
  code: String,
  status: "Accepted" | "Wrong Answer" | "Error" | "Timeout",
  runtime: String,
  memory: String,
  submittedAt: Date,
  isContestSubmission: Boolean,
  contestId: ObjectId (if contest submission)
}
```

### 4. **Contests**

Holds contest metadata, problems, and schedule.

**Fields:**

```json
{
  _id: ObjectId,
  title: String,
  slug: String,
  problems: [ObjectId],
  startTime: Date,
  endTime: Date,
  createdBy: ObjectId
}
```

### 5. **DailyChallenges**

Defines the daily coding challenge shown to users.

**Fields:**

```json
{
  _id: ObjectId,
  date: String,
  problemId: ObjectId
}
```

## 🔄 Relationships

* **User ↔ Submissions**: One-to-many (a user can submit many times)
* **Problem ↔ Submissions**: One-to-many
* **Contest ↔ Problems**: Many-to-many
* **User ↔ Contests**: Tracked indirectly via submissions

## 📌 Indexes & Optimization

* Indexed `email`, `username`, and `slug` fields for fast lookup
* Created compound indexes for contest leaderboard queries (contestId + userId)
* Limited submission history fetching with pagination

---

📘 Next: [`auth.md`](../API-Reference/auth.md)

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
