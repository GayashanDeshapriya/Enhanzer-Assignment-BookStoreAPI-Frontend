import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class BookListComponent implements OnInit {
  BookList: any[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe((books: any[]) => {
      this.BookList = books;
    });
  }

  editBook(book: any): void {
    this.router.navigate(['/editBook', book.id]);  // Ensure the route is passed with the book's id
  }

  deleteBook(bookId: number): void {
    this.bookService.deleteBook(bookId).subscribe(() => {
      this.fetchBooks();  // Refresh the list after deletion
    });
  }
}
