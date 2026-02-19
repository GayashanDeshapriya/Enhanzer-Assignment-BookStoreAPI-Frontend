import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup;
  isEditMode = false;
  bookId!: number;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
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
      this.bookService.getBookById(this.bookId).subscribe(book => {
        this.bookForm.patchValue(book);
      });
    }
  }

  // Convenience getter for easy access in the template
  get f() { return this.bookForm.controls; }

  onSubmit(): void {
    if (this.bookForm.invalid) return;

    if (this.isEditMode) {
      this.bookService.updateBook(this.bookId, this.bookForm.value).subscribe(() => {
        this.router.navigate(['/books']);
      });
    } else {
      this.bookService.addBook(this.bookForm.value).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/books']);
  }
}
