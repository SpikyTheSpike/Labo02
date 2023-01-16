import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEvent } from 'src/app/models/IEvenet';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {
  registerForm : FormGroup;
  isCreate : string | null=""
  constructor(private _fb : FormBuilder, private _eventService : EventService, private _route : Router) {
    this.registerForm = this._fb.group({
      name : [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description : [null, [Validators.required]],
      startDate : [null, [Validators.required]],
      endDate : [null, [Validators.required]],
      maxGuest : [null, [Validators.required]]
    })
  }

  register() : void {
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      let registerBody : IEvent = this.registerForm.value;
     this._eventService.create(registerBody).subscribe({
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
