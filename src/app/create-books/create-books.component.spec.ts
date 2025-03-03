import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBooksComponent } from './create-books.component';

describe('CreateBooksComponent', () => {
  let component: CreateBooksComponent;
  let fixture: ComponentFixture<CreateBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
