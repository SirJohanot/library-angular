import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Order } from 'src/app/interfaces/Order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  allOrders!: Order[];
  displayedOrders!: Order[];

  constructor(
    private http: HttpClient,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.http.get<Order[]>("/orders")
      .subscribe(orders => {
        this.allOrders = orders;
        this.ref.detectChanges()
      });
  }

  setDisplayedOrders(orders: Order[]): void {
    this.displayedOrders = orders;
  }

  trackOrders(index: number, order: Order) {
    return order.id;
  }

}
