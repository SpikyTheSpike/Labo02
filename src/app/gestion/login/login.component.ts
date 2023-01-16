import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/IAuth';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm : FormGroup;

  constructor(private _fb : FormBuilder, private _authService : AuthService, private _route : Router) {
    this.loginForm = this._fb.group({
      identifier : [null, [Validators.required]],
      password : [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    sessionStorage.removeItem('create');
      this._authService.$connectedUser.subscribe({
        next : (res) => {
          if(res){
            this._route.navigateByUrl('/')
          }
        }
      })
  }

  login() : void {

    if(this.loginForm.valid){
      let loginBody : ILogin = this.loginForm.value;
      this._authService.login(loginBody);
    }

  }
}
