import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
BookList: any[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    debugger;
    this.bookService.getBooks().subscribe((books: any[]) => {
      this.BookList = books;
    });
  }

  editBook(book: any): void {
    this.router.navigate(['/books/edit', book.id]);
  }

  deleteBook(bookId: number): void {
    this.bookService.deleteBook(bookId).subscribe(() => {
      this.fetchBooks();  // Refresh the list after deletion
    });
  }
}
