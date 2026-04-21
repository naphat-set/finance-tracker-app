# 💰 Finance Tracker (Fullstack Practice)

A personal finance tracking web application built to practice fullstack development, including authentication, CRUD operations, and dashboard analytics.

> ⚠️ This project is still a work in progress.

---

## 🧱 Tech Stack

* **Frontend & Backend:** Next.js (App Router, API Routes)
* **Database:** PostgreSQL
* **Authentication:** JWT
* **Styling:** Tailwind CSS

---

## ✨ Features

### 🔐 Authentication

* Login with JWT
* Token stored in localStorage
* Protected API requests

### 💸 Transactions

* Create / Read / Update / Delete transactions
* Display income & expense
* Linked with categories

### 🏷 Categories

* Manage categories
* Show transaction count per category

### 📊 Dashboard

* Total income & expense summary
* Category-based breakdown

### 👤 Users

* List users
* Calculate total income / expense per user

---

## 🗄 Database Design

Tables:

* `users`
* `categories`
* `transactions`

Relationships:

* 1 user → many transactions
* 1 category → many transactions

---

## ⚙️ API Structure

Built using Next.js API routes:

* `/api/auth/login`
* `/api/transactions`
* `/api/categories`
* `/api/dashboard`
* `/api/users`

---

## 🚧 Work in Progress

The following features are not fully implemented yet:

* [ ] Date range filter (UI done, backend not connected)
* [ ] Category filter
* [ ] Route protection (redirect if not logged in)
* [ ] Delete confirmation modal

---

## 🧠 What I Learned

* Building a fullstack app using Next.js (frontend + backend)
* Designing relational database with PostgreSQL
* Implementing JWT authentication
* Managing API communication and state
* Structuring scalable frontend (feature-based architecture)

---

## 📌 Notes

This project was built as a practice project to strengthen fullstack development skills.
Some features are incomplete, but core functionality is working end-to-end.

---

## 🚀 Future Improvements

* Add filtering system (date & category)
* Improve UI/UX
* Add charts (e.g., using chart libraries)
* Optimize performance

---

## ⚙️ Setup Instructions

1. Clone the repository
2. Install dependencies

   ```bash
   npm install
   ```
3. Setup environment variables
   Create a `.env` file based on `.env.example`
4. Run the application

   ```bash
   npm run dev
   ```
   
---

## 👨‍💻 Author

**Naphat Sethabutr**
