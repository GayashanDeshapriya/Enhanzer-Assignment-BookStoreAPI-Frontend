import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  BookList: any[] = [];
  isLoading = false;
  deletingId: number | null = null;

  constructor(
    private bookService: BookService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.isLoading = true;
    this.bookService.getBooks().subscribe({
      next: (books: any[]) => {
        this.BookList = books;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.toastr.error(
          'Unable to load books from the server. Please check the API connection.',
          '🔌 Connection Error',
          { timeOut: 6000, disableTimeOut: false }
        );
      }
    });
  }

  editBook(book: any): void {
    this.router.navigate(['/books/edit', book.id]);
  }

  deleteBook(book: any): void {
    this.deletingId = book.id;
    this.bookService.deleteBook(book.id).subscribe({
      next: () => {
        this.deletingId = null;
        this.toastr.success(
          `"${book.title}" has been removed from your catalog.`,
          '🗑️ Book Deleted'
        );
        this.fetchBooks();
      },
      error: () => {
        this.deletingId = null;
        this.toastr.error(
          `Failed to delete "${book.title}". Please try again.`,
          '❌ Delete Failed',
          { timeOut: 5000 }
        );
      }
    });
  }
}
