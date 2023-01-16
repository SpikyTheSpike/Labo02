import { Component, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IEvent } from 'src/app/models/IEvenet';
import { EventService } from 'src/app/shared/services/event.service';
import { RegistrationService } from 'src/app/shared/services/registration.service';
import { IRegistration } from 'src/app/models/IRegistration';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{

  constructor(private _eventService : EventService , private _registrationService : RegistrationService){}
  liste : IEvent[] = []
  My : IEvent[] = []
  listeID: number[]=[]
  isInscrit :boolean= false


  currentMember : string | null =sessionStorage.getItem('userId')

  inscriptionss(): void {
    this.currentMember=null
    this.currentMember =sessionStorage.getItem('userId')
    this._eventService.getAllInscrit().subscribe({

      next: (res) =>{
        this.My=res

        this.My.forEach(element => {
          this.listeID.push(element.id)
        });
      },
      complete: ()=>{},
      error: ()=>{},
    })

  }

  delete(id :number):void{
    this._eventService.delete(id).subscribe({
      next : () => {
        //La db ayant été modifiée lors de la suppression si tout s'est bien passé, on met la liste des musiques à jour
        this._eventService.getAll().subscribe({
          next : (res) => { this.liste = res }
        })
      }
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


  ngOnInit(): void {
    this.currentMember=null
    this.currentMember =sessionStorage.getItem('userId');

    this._eventService.getAll().subscribe({
      next: (res) =>{

        this.inscriptionss()
       res.forEach(element => {
        console.log(element.id)
        if(!this.listeID.includes(element.id)){
          this.liste.push(element)
        }
       }


       );
      },
      complete: ()=>{},
      error: ()=>{},
    })
  }
}
