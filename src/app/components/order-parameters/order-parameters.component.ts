import { Component, Input } from '@angular/core';
import { Order } from 'src/app/interfaces/Order';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-order-parameters',
  templateUrl: './order-parameters.component.html',
  styleUrls: ['./order-parameters.component.css']
})
export class OrderParametersComponent {

  @Input() order!: Order;

  constructor(
    public languageService: LanguageService
  ) { }

}
