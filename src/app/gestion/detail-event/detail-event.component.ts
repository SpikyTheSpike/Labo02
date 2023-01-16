import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IEvent } from 'src/app/models/IEvenet';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.scss']
})
export class DetailEventComponent implements OnInit{
  id : number;
  activity! : IEvent

  private _url : string = 'https://localhost:7245/api/Activity/';
  constructor( private _route : Router, private _activeRoute : ActivatedRoute , private _eventService : EventService) {
    this.id = parseInt(this._activeRoute.snapshot.params['id']);
  }

  ngOnInit(): void {
    this._eventService.getEventbyId(this.id).subscribe({
      next: (res) =>{
        this.activity=res

      },
      complete: ()=>{},
      error: ()=>{},
    })
  }

}
