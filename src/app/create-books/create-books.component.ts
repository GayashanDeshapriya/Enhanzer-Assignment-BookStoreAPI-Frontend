import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css'] // Fixed the typo here
})
export class CreateBooksComponent {
  bookForm: FormGroup;
  pagetitle = "Book Management";

  constructor(private fb: FormBuilder, private bookService: BookService) {
    // Initializing the form with validators
    this.bookForm = this.fb.group({
      Title: ['', Validators.required],
      Author: ['', Validators.required],
      ISBN: ['', Validators.required],
      PublicationDate: ['', Validators.required],
     
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      console.log(this.bookForm.value);
      // Call the service to save the book details
      this.bookService.addBook(this.bookForm.value).subscribe(() => {
        // Clear the form after a successful save
        this.bookForm.reset();
        alert('Book added successfully!');
      }, error => {
        // Handle error responses from the server
        console.error('Error saving book:', error);
        alert('An error occurred while saving the book.');
      });
    } else {
      // Show error message to the user
      alert('Please fill all the required fields');
    }
  }
}

