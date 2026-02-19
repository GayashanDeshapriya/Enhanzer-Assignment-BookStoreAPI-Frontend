import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './features/components/book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import { RouterModule } from '@angular/router';
import { BookFormComponent } from './features/components/book-form/book-form.component';
import { BookEditComponent } from './features/components/book-edit/book-edit.component';
import { BookCreateComponent } from './features/components/book-create/book-create.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFormComponent,
    BookEditComponent,
    BookCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
