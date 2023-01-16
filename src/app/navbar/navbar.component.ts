import { Component } from '@angular/core';
import { IAuthUser } from '../models/IAuthResult';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  connectedUser :IAuthUser | undefined;
  constructor(private _authService : AuthService){}

  ngOnInit() : void {

    this._authService.$connectedUser.subscribe({
      next : (user : IAuthUser | undefined) => {
        this.connectedUser = user;


      },
      error : () => {},
      complete : () => {}
    })
  }

  disconnect() : void {
    this._authService.logout();
  }
}
