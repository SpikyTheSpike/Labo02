import { HttpClient } from '@angular/common/http';
import { IAuthResult, IAuthUser } from 'src/app/models/IAuthResult';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ILogin, IRegister } from 'src/app/models/IAuth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _url : string = 'https://localhost:7245/api/Auth/';

  private _$connectedUser : Subject<IAuthUser | undefined> = new Subject<IAuthUser | undefined>();

  $connectedUser : Observable<IAuthUser | undefined> = this._$connectedUser.asObservable();

  constructor(private _httpClient : HttpClient , private _route : Router) { }

  register(register : IRegister) : void {
    this._httpClient.post<IAuthResult>(this._url+'Register', register).subscribe({
      next : (res) => {
        //On emet le user qui vient de s'enregistrer via l'observable connectedUser
        sessionStorage.setItem('create',"true");
        //Mettre le token et le user en LocalStorage
        this._route.navigateByUrl('/gestion/accueil');
      }

    })

  }

  login(loginForm : ILogin) : void {

    this._httpClient.post<IAuthResult>(this._url+'Login', loginForm).subscribe({
      next : (res) => {

        //On emet le user qui vient de s'enregistrer via l'observable connectedUser
        this._$connectedUser.next(res.member);

        //Mettre le token et le user en LocalStorage
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('userId', res.member.id);
        this._route.navigateByUrl('/gestion/accueil');
      }
    })
  }

  logout() : void {
    this._$connectedUser.next(undefined);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    this._route.navigateByUrl('/gestion/wait');
  }
}
