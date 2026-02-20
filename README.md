# 📚 Book Management Frontend

A responsive Angular application built to consume the Book Management API.  
This application allows users to manage books with full CRUD functionality.

---

## 🚀 Tech Stack

- Angular (Latest Stable Version)
- TypeScript
- Reactive Forms
- Angular HttpClient
- REST API Integration
- Bootstrap / CSS

---

## 📌 Features

- View list of books
- Add new book
- Edit existing book
- Delete book
- Client-side form validation (Reactive Forms)
- API error handling
- Clean component-based structure

---

## 🏗 Architecture

This project uses:

- Reactive Forms (not template-driven)
- Service-based API communication
- Clean separation of concerns

```
src/app/
│
├── components/
│   ├── book-list/
│   └── book-form/
│
├── services/
│   └── book.service.ts
│
├── models/
│   └── book.model.ts
```

---

## 🛠 How to Run the Frontend

### 1️⃣ Install Node.js  
Download from:  
https://nodejs.org/

### 2️⃣ Install Angular CLI
```bash
npm install -g @angular/cli
```

### 3️⃣ Clone the repository
```bash
git clone <your-frontend-repo-url>
cd book-management-frontend
```

### 4️⃣ Install dependencies
```bash
npm install
```

### 5️⃣ Run the application
```bash
ng serve
```

App will run at:
```
http://localhost:4200
```

---

## 🔗 Backend API Configuration

Ensure the backend API is running.

If needed, update API base URL in:

```
environment.ts
```

Example:

```ts
apiUrl: 'https://localhost:5001/api'
```

---

## 🧠 Why Reactive Forms?

Reactive Forms are used because they:

- Provide explicit form control structure
- Offer scalable validation handling
- Enable dynamic validation rules
- Improve testability
- Allow better API error integration

---

## 🛡 Validation

Client-side validation includes:

- Required fields
- Maximum length validation
- ISBN pattern validation (13 digits)
- Publication date validation

---

## 📌 Notes

- The frontend communicates with ASP.NET Core Web API.
- All validation is implemented both on client-side and server-side.
- Designed following clean and maintainable coding practices.

---

## 👨‍💻 Author

Developed as part of a Software Engineer technical assignment.
