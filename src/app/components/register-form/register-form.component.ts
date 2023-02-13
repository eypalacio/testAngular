import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  @Output() emisor = new EventEmitter<string>();

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatpassword: new FormControl(''),
  })

  constructor(private api: ApiService){}

  submit(){
    const formulario = {
      form:{
        firstName: this.form.get('name')?.value,
        lastName: this.form.get('lastname')?.value,
        email: this.form.get('email')?.value,
        plainPassword: this.form.get('password')?.value
      }
    }
    this.api.register(formulario).subscribe(result=>{
      console.log(result);
      this.emisor.emit('successfull submit register');
    }, error=>{
      console.error(error);
      this.emisor.emit('error submit')
    })
  }

}
