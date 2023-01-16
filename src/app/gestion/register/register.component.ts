import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegister } from 'src/app/models/IAuth';
import { IAuthUser } from 'src/app/models/IAuthResult';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm : FormGroup;
  isCreate : string | null=""
  constructor(private _fb : FormBuilder, private _authService : AuthService, private _route : Router) {
    this.registerForm = this._fb.group({
      pseudo : [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email : [null, [Validators.required, Validators.email]],
      lastname : [null, [Validators.required, Validators.maxLength(150)]],
      firstname : [null, [Validators.required, Validators.maxLength(150)]],
      password : [null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_]).+$/)]]
    })
  }

  ngOnInit(): void {
      this._authService.$connectedUser.subscribe({
        next : (res : IAuthUser | undefined ) => {
          if(res) {
            this._route.navigateByUrl('/');
          }
        }
      })
  }

  register() : void {
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      let registerBody : IRegister = this.registerForm.value;
     this._authService.register(registerBody);
    this.isCreate=  sessionStorage.getItem('create');

    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }
}
