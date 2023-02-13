import { Component } from '@angular/core';
import { open_close } from 'src/app/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [open_close]
})
export class HomeComponent {

}
