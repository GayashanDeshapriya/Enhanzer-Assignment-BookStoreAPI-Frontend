# Book Store — Frontend

An Angular 17 single-page application for managing a personal book catalog. It communicates with a .NET Web API backend to perform full CRUD operations on books.

---

## Features

- **Landing page** — Overview of the application with quick-access navigation
- **Book Catalog** — View all books in a clean, sortable table with delete support
- **Add a Book** — Reactive form to create a new book entry (Title, Author, ISBN, Publication Date)
- **Edit a Book** — Pre-populated form to update an existing book's details
- **Toast notifications** — Real-time success/error feedback via `ngx-toastr`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 17 |
| Styling | Bootstrap 5.3, Bootstrap Icons 1.11 |
| HTTP | Angular `HttpClient` |
| Forms | Angular Reactive Forms |
| Notifications | ngx-toastr 18 |
| PDF Viewer | ngx-extended-pdf-viewer 19 |
| Unit Testing | Karma + Jasmine |

---

## Prerequisites

- **Node.js** v18+ and **npm**
- **Angular CLI** v17  
  ```bash
  npm install -g @angular/cli@17
  ```
- **BookStore API** (.NET 8) running locally at `https://localhost:7219`

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure the API URL

The backend API URL is set in `src/environments/environment.ts`:

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://localhost:7219/api/books'
};
```

Update this value if your backend runs on a different host or port.

### 3. Start the development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload when source files change.

---

## Application Routes

| Path | Page | Description |
|---|---|---|
| `/` | Landing | Home / welcome page |
| `/books` | Catalog | Full list of all books |
| `/books/add` | Add Book | Form to create a new book |
| `/books/edit/:id` | Edit Book | Form to update an existing book |

---

## Book Model

Each book record contains the following fields:

| Field | Type | Validation |
|---|---|---|
| `title` | string | Required, min 2 characters |
| `author` | string | Required |
| `isbn` | string | Required, 10 or 13 digits |
| `publicationDate` | string (date) | Required |

---

## Available Scripts

| Command | Description |
|---|---|
| `ng serve` | Start the local development server at `http://localhost:4200` |
| `ng build` | Build the production bundle into the `dist/` directory |
| `ng test` | Run unit tests via Karma |
| `ng generate component <name>` | Scaffold a new component |

---

## Project Structure

```
src/
├── app/
│   ├── features/
│   │   ├── components/
│   │   │   ├── landing/          # Landing page
│   │   │   ├── book-list/        # Book catalog table
│   │   │   ├── book-create/      # Add new book page
│   │   │   ├── book-edit/        # Edit book page
│   │   │   └── book-form/        # Shared reactive form component
│   │   └── service/
│   │       └── book.service.ts   # HTTP service for Book API
│   ├── app-routing.module.ts     # Route definitions
│   └── app.module.ts             # Root module
├── environments/
│   ├── environment.ts            # Production environment (API URL)
│   └── environment.development.ts
└── styles.css                    # Global styles
```

---

## Further Help

For Angular CLI usage, run `ng help` or visit the [Angular CLI documentation](https://angular.io/cli).
