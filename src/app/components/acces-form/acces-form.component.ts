import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-acces-form',
  templateUrl: './acces-form.component.html',
  styleUrls: ['./acces-form.component.scss']
})
export class AccesFormComponent {

  @Output() emisor = new EventEmitter<string>();

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  error: string = '';

  constructor(private api: ApiService){
  }

  submit(){
    const formulario = {
      username: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    }
    this.api.login(formulario).subscribe(result=>{
      console.log(result);
      this.emisor.emit('successfull submit login');
    }, error=>{
      console.error(error);
      this.error = 'incorrect user or password';
      // this.emisor.emit('error submit')
    })
  }
}
