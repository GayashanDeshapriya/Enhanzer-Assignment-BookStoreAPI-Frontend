import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './features/components/landing/landing.component';
import { BookListComponent } from './features/components/book-list/book-list.component';
import { BookEditComponent } from './features/components/book-edit/book-edit.component';
import { BookCreateComponent } from './features/components/book-create/book-create.component';

const routes: Routes = [
  { path: '',         component: LandingComponent },
  { path: 'books',    component: BookListComponent },
  { path: 'books/add',       component: BookCreateComponent },
  { path: 'books/edit/:id',  component: BookEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
