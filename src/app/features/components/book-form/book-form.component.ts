import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../service/book.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup;
  isEditMode = false;
  bookId!: number;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // Build the form with controls and validators
    this.bookForm = this.fb.group({
      title:           ['', [Validators.required, Validators.minLength(2)]],
      author:          ['', [Validators.required]],
      isbn:            ['', [Validators.required, Validators.pattern(/^\d{10}(\d{3})?$/)]],
      publicationDate: ['', [Validators.required]]
    });

    // Check if we are in edit mode (route has an :id param)
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.bookId = +id;
      this.bookService.getBookById(this.bookId).subscribe({
        next: (book) => {
          this.bookForm.patchValue(book);
        },
        error: () => {
          this.toastr.error(
            'Could not load book details. Please try again.',
            '⚠️ Load Failed',
            { timeOut: 5000 }
          );
          this.router.navigate(['/books']);
        }
      });
    }
  }

  // Convenience getter for easy access in the template
  get f() { return this.bookForm.controls; }

  onSubmit(): void {
    if (this.bookForm.invalid) {
      this.toastr.warning(
        'Please fill in all required fields correctly before submitting.',
        '📋 Incomplete Form',
        { timeOut: 3000 }
      );
      return;
    }

    this.isSubmitting = true;
    const title = this.bookForm.value.title;

    if (this.isEditMode) {
      this.bookService.updateBook(this.bookId, this.bookForm.value).subscribe({
        next: () => {
          this.toastr.success(
            `"${title}" has been updated successfully.`,
            '✏️ Book Updated'
          );
          this.router.navigate(['/books']);
        },
        error: () => {
          this.isSubmitting = false;
          this.toastr.error(
            'Failed to update the book. Please check your connection and try again.',
            '❌ Update Failed',
            { timeOut: 5000 }
          );
        }
      });
    } else {
      this.bookService.addBook(this.bookForm.value).subscribe({
        next: () => {
          this.toastr.success(
            `"${title}" has been added to your catalog!`,
            '📚 Book Added'
          );
          this.router.navigate(['/books']);
        },
        error: () => {
          this.isSubmitting = false;
          this.toastr.error(
            'Failed to add the book. Please check your connection and try again.',
            '❌ Add Failed',
            { timeOut: 5000 }
          );
        }
      });
    }
  }

  onCancel(): void {
    this.toastr.info(
      'No changes were saved.',
      '↩️ Cancelled',
      { timeOut: 2500 }
    );
    this.router.navigate(['/books']);
  }
}
