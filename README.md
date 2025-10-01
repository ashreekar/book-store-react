# Book Store Application using React

---

## 📝 GitHub Link

https://github.com/ashreekar/book-store-react
---

## 📌 Overview

This is a simple **Book store application** built using **React (Vite)**.
The app allows users to:

* Look for books and filter and search
* View books details
* Add books
* Dynamic routing for books
* Dynamic routing for category
* Error route handling

It uses **functional components, useState, and redux-toolkit and  react-redux** to handle data flow and state management.

---

## ⚙️ Features

* ✅ A landing page with a welcome message and a list of book categories 
* ✅ Delete tasks
* ✅ Display a list of popular books in the form of cards with a link to view more details.
* ✅ A navigation bar with links to "Home", "Browse Books", and "Add Book" 
* ✅ Use dynamic routing to filter books by category.
* ✅ Search bar on the Browse Books page to filter books by title 
or author. 
* ✅ A dynamic route that displays detailed information about a selected book.
* ✅ A form for adding a new book to the library. 
* ✅ Used redux for state management.
* ✅ Added a 404 Error page for handling unknown routes.
* ✅ Clean and responsive UI

---

## 🏗️ Project Structure

```
bookstore/
├── public/
├── src/
│   ├── components/
│   │   ├── AddBook.jsx
│   │   ├── BookDetails.jsx
│   │   ├── BookNotFound.jsx
│   │   ├── BrowseBooks.jsx
│   │   ├── ErrorElement.jsx
│   │   ├── export.components.js
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LandingPage.jsx
│   ├── utils/
│   │   ├── bookData.js
│   ├── stateUtil/
│   │   ├── bookAppStore.js
│   │   ├── bookData.slice.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── package.json
├── index.html
├── vite.config.js
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ashreekar/book-store-react.git
cd todolist
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Application

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎨 Styling

* Styled with **CSS / Tailwind** for a user-friendly interface.

---

## 📜 Assignment Requirements Covered

✔️ React app created with **Vite**
✔️ Components: App, AddBook, Header, Footer, LandingPage, ErrorElement, BrowseBooks, BookDetails
✔️ State using implemented
✔️ Added dynamic routing for book details and book category filtering
✔️ Event handling and error message
✔️ Added search bar for searching by book name and author name
✔️ Added error page 404 not found page
✔️ Styled for better user experience
✔️ README with setup instructions
