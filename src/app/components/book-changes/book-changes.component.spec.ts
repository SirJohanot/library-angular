import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookChangesComponent } from './book-changes.component';

describe('BookChangesComponent', () => {
  let component: BookChangesComponent;
  let fixture: ComponentFixture<BookChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookChangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
