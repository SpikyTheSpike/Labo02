import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent } from 'src/app/models/IEvenet';
import { EventService } from 'src/app/shared/services/event.service';
import { Dayjs } from 'dayjs';
import * as dayjs from 'dayjs'
@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent implements OnInit{
  registerForm : FormGroup=this._fb.group({
    name : [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    description : [null, [Validators.required]],
    startDate : [null , [Validators.required]],
    endDate : [null, [Validators.required]],
    maxGuest : [null, [Validators.required]]
  })
  isCreate : string | null=""
  id : number
  constructor(private _fb : FormBuilder, private _eventService : EventService, private _route : Router, private _activeRoute : ActivatedRoute) {
    this.id = parseInt(this._activeRoute.snapshot.params['id']);

  }

  ngOnInit(): void {

    this._eventService.getEventbyId(this.id).subscribe({
      next: (res) =>{

        this.registerForm=this.registerForm = this._fb.group({
          name : [res.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
          description : [res.description, [Validators.required]],
          startDate : [dayjs(res.startDate).format('YYYY-MM-DD') , [Validators.required]],
          endDate : [dayjs(res.endDate).format('YYYY-MM-DD'), [Validators.required]],
          maxGuest : [res.maxGuest, [Validators.required]]
        })
        },

      complete: ()=>{},
      error: ()=>{},

    })

  }

  register() : void {
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      let registerBody : IEvent = this.registerForm.value;
     this._eventService.update(this.id,registerBody).subscribe({
      next : () => {
        this._route.navigateByUrl('/gestion/myevents');
      }
    });
    this.isCreate=  sessionStorage.getItem('create');

    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }
}
