import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-myorder',
  templateUrl: './card-myorder.component.html',
  styleUrls: ['./card-myorder.component.scss']
})
export class CardMyorderComponent implements OnInit {

  orders: any[] = [
    {
      name: 'Salad',
      price: 4.99,
      cant: 2
    }
  ];

  total: number = 0

  ngOnInit(): void {
    this.orders.forEach(e => {
      this.total += e.price * e.cant;
    })
  }
}
