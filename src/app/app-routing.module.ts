import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './listing/listing.component';
import { CreateBooksComponent } from './create-books/create-books.component';
import { EditBookComponent } from './edit-book/edit-book.component';


const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'editBook/:id', component: EditBookComponent },  // Route for editing a book
  { path: 'addbook', component: CreateBooksComponent },
  { path: 'books/addbook', component: CreateBooksComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
