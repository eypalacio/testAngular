import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  display$: any;
  form: string = 'login';

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }

  action(event: any) {
    console.log(event);
    
    switch (event) {
      case 'login':
        this.form = 'login'
        break;
      case 'register':
        this.form = 'register'
        break;
      case 'successfull submit login':
        this.close();
        break;
      case 'successfull submit register':
        this.form = 'login'
        break;
    }
  }
}