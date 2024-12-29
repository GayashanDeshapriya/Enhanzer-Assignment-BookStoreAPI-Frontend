import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  editBookForm: FormGroup;
  bookId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {
    this.editBookForm = this.fb.group({
      Title: ['', Validators.required],
      Author: ['', Validators.required],
      ISBN: ['', Validators.required],
      PublicationDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['id']; // Get book id from route params
    console.log('Book ID:', this.bookId);
    this.bookService.getBookById(this.bookId).subscribe(book => {
    // Format the date to YYYY-MM-DD
    if (book.PublicationDate) {
      const date = new Date(book.PublicationDate);
      const formattedDate = `${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}-${date.getFullYear()}`;
      book.PublicationDate = formattedDate;
    }
    
      // Patch form with the book details
      this.editBookForm.patchValue({
        Title: book.title,
        Author: book.author,
        ISBN: book.isbn,
        PublicationDate: book.publicationDate
      });
    });
  }

  updateBook(): void {
    if (this.editBookForm.valid) {
      this.bookService.updateBook(this.bookId, this.editBookForm.value).subscribe({
        next: () => {
          this.router.navigate(['/books']);  // Redirect to the book list after update
        },
        error: (err) => {
          console.error('Error updating book:', err);
        }
      });
    }
  }
}