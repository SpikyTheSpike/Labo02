import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/models/IEvenet';
import { EventService } from 'src/app/shared/services/event.service';


@Component({
  selector: 'app-myreservations',
  templateUrl: './myreservations.component.html',
  styleUrls: ['./myreservations.component.scss']
})
export class MyreservationsComponent implements OnInit{
  liste : IEvent[] = []
  currentMember : string | null =sessionStorage.getItem('userId')
  constructor( private _eventService : EventService){}

  ngOnInit(): void {
    this.currentMember=null
    this.currentMember =sessionStorage.getItem('userId')
    this._eventService.getAllInscrit().subscribe({

      next: (res) =>{

        this.liste=res

      },
      complete: ()=>{},
      error: ()=>{},
    })

  }

}
