import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './features/components/book-list/book-list.component';
import { BookEditComponent } from './features/components/book-edit/book-edit.component';
import { BookCreateComponent } from './features/components/book-create/book-create.component';



const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'editBook/:id', component: BookEditComponent },  // Route for editing a book
  { path: 'addbook', component: BookCreateComponent },
  { path: 'books/addbook', component: BookCreateComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
