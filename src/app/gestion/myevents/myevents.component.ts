import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from 'src/app/models/IEvenet';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.scss']
})
export class MyeventsComponent {
  private _url : string = 'https://localhost:7245/api/Activity/NextActivities';
  constructor(private _eventService : EventService){}
  liste : IEvent[] = []
  token : string | null= sessionStorage.getItem('token')
  currentMember : string | null= sessionStorage.getItem('userId')

  delete(id :number):void{
    this._eventService.delete(id).subscribe({
      next : () => {
        //La db ayant été modifiée lors de la suppression si tout s'est bien passé, on met la liste des musiques à jour
        this._eventService.getAll().subscribe({
          next : (res) => { this.liste = res
          this.ngOnInit() }
        })
      }
    })
  }

  ngOnInit(): void {
    this._eventService.getAll().subscribe({
      next: (res) =>{
        this.liste=res
       this.liste= this.liste.filter(mot => this.currentMember===mot.creatorId.toString())
        console.log(res)
      },
      complete: ()=>{},
      error: ()=>{},
    })
}

cancele(id :number):void{
  this._eventService.cancel(id).subscribe({
    next : () => {
      //La db ayant été modifiée lors de la suppression si tout s'est bien passé, on met la liste des musiques à jour
      this._eventService.getAll().subscribe({
        next : (res) => { this.liste = res }
      })
    }
  })
}
}
