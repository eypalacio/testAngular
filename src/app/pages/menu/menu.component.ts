import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  categories: any[] = ['seafood', 'pasta', 'meats', 'pizza', 'salad', 'drinks', 'desserts', 'breakfast', 'especial lunch', 'especial dinner']
}
