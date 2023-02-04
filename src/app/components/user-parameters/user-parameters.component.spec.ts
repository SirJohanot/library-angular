import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserParametersComponent } from './user-parameters.component';

describe('UserParametersComponent', () => {
  let component: UserParametersComponent;
  let fixture: ComponentFixture<UserParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserParametersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
