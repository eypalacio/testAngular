import { Component } from '@angular/core';
import { ModalService } from 'src/app/modal/modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private modalService: ModalService
  ) { }

  open() {
    this.modalService.open();
  }
}
