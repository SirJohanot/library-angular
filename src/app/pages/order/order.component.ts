import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/interfaces/Order';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  orderId!: number;
  order!: Order;

  constructor(
    public languageService: LanguageService,
    public authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.orderId = +(this.route.snapshot.paramMap.get('id') || 0);
    this.fetchOrder();
  }

  private fetchOrder(): void {
    this.http.get<Order>(`/orders/${this.orderId}`)
      .subscribe(book => this.order = book);
  }

  handleStateChange(action: string): void {
    this.http.put(`/orders/${this.orderId}/${action}`, {})
      .subscribe(() => this.fetchOrder());
  }

}
