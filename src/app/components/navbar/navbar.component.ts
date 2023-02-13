import { Component } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { ModalService } from 'src/app/modal/modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  mostrar: boolean = false;
  myorder: boolean = false;

  constructor(
    private modalService: ModalService,
    public sessionStorage: SessionStorageService,
  ) { }

  open() {
    this.modalService.open();
  }
}
