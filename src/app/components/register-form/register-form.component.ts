import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  loading: boolean = false;

  @Output() emisor = new EventEmitter<string>();

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatpassword: new FormControl(''),
  })

  constructor(private api: ApiService) { }

  submit() {
    this.loading = true;
    const formulario = {
      form: {
        firstName: this.form.get('name')?.value,
        lastName: this.form.get('lastname')?.value,
        email: this.form.get('email')?.value,
        plainPassword: this.form.get('password')?.value
      },
      extra: {
        isThirdPartyUser: false,
        thirdPartyProvider: null,
      }
    }
    this.api.register(formulario).subscribe(result => {
      console.log(result);
      this.emisor.emit('successfull submit register');
      this.loading = false;
    }, error => {
      console.error(error);
      this.emisor.emit('error submit')
      this.loading = false;
    })
  }

  validateEmail() {
    return this.form.get('email')?.value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i) != null;
  }

  disabled() {
    return this.form.get('name')?.value == '' || this.form.get('lastname')?.value == '' || 
    this.form.get('email')?.value == '' || this.form.get('passwword')?.value == '';
  }

}
