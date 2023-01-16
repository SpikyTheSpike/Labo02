import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from 'src/app/models/IEvenet';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  token : string | null = sessionStorage.getItem('token')
  private _url : string = 'https://localhost:7245/api/Activity/';
  constructor(private _httpClient : HttpClient) { }


  getAll() : Observable<IEvent[]> {
    return this._httpClient.get<IEvent[]>(this._url+"NextActivities");
  }

  getAllInscrit() : Observable<IEvent[]> {
    this.token= sessionStorage.getItem('token')
    return this._httpClient.get<IEvent[]>(this._url+"MyActivities", { headers : { 'Authorization' : 'Bearer ' + this.token  }} );
  }

  getEventbyId(id : number) : Observable<IEvent>{
    return this._httpClient.get<IEvent>(this._url+id);
  }

  delete(id : number) : Observable<IEvent>{
    this.token= sessionStorage.getItem('token')
    return this._httpClient.delete<IEvent>(this._url+id , { headers : { 'Authorization' : 'Bearer ' + this.token  }});
  }

  update(id : number , event : IEvent) : Observable<IEvent>{
    this.token= sessionStorage.getItem('token')
    return this._httpClient.put<IEvent>(this._url+id , event  ,{ headers : { 'Authorization' : 'Bearer ' + this.token  }});
  }

  cancel(id : number ) : Observable<IEvent>{
    this.token= sessionStorage.getItem('token')
    return this._httpClient.patch<IEvent>(this._url+id+"/Cancel" ,{}, { headers : { 'Authorization' : 'Bearer ' + this.token  }});
  }


  create(event : IEvent ) : Observable<IEvent>{
    this.token= sessionStorage.getItem('token')
    return this._httpClient.post<IEvent>('https://localhost:7245/api/Activity' ,event, { headers : { 'Authorization' : 'Bearer ' + this.token  }});
  }



}
