import { LoginService } from './login.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder, private loginService: LoginService) {
    this.form = fb.group({
      email: '',
      password: ''
    });


    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
    this.form.setValue({
      email: 'shamim@ss.com',
      password: 'password'
    })

    this.email.setValidators([Validators.required, Validators.email]);

  }
  public loginUser(values: { email: string, password: string }): void {
    console.log('login button fire')
    this.submitted = true;
   // if (this.form.valid) {
      this.loginService.loginUser({ email: values.email, password: values.password })
        .subscribe((data) => {
          console.log(data)
          if (data.success) {
            alert('login succeed');
            this.email.setErrors({ 'invalidUserOrPassword': false });

            localStorage.setItem('token', data.token);
          } else {
            this.email.setErrors({ 'invalidUserOrPassword': true });
            // alert('auth failed')
          }
        });

      // your code goes here
      // console.log(values);
    //}
  }
}
