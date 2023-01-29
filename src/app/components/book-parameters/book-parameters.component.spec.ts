import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookParametersComponent } from './book-parameters.component';

describe('BookParametersComponent', () => {
  let component: BookParametersComponent;
  let fixture: ComponentFixture<BookParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookParametersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
