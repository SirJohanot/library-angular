import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOrderFormComponent } from './book-order-form.component';

describe('BookOrderFormComponent', () => {
  let component: BookOrderFormComponent;
  let fixture: ComponentFixture<BookOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookOrderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
