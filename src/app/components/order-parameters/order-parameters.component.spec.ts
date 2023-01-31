import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderParametersComponent } from './order-parameters.component';

describe('OrderParametersComponent', () => {
  let component: OrderParametersComponent;
  let fixture: ComponentFixture<OrderParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderParametersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
