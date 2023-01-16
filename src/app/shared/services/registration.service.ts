import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegistration } from 'src/app/models/IRegistration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  token : string | null = sessionStorage.getItem('token')
  private _url : string = 'https://localhost:7245/api/Registration/';
  constructor(private _httpClient : HttpClient) { }


  join(id : number , registration : IRegistration) : Observable<IRegistration>{
    this.token= sessionStorage.getItem('token')
    return this._httpClient.post<IRegistration>(this._url+"Join/"+id , registration, { headers : { 'Authorization' : 'Bearer ' + this.token  }});
  }
}
