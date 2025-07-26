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
