import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRegistration } from 'src/app/models/IRegistration';
import { RegistrationService } from 'src/app/shared/services/registration.service';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss']
})
export class CreateRegistrationComponent {
  registerForm : FormGroup;
  id :number
  constructor(private _fb : FormBuilder, private _registrationService : RegistrationService, private _route : Router, private _activeRoute : ActivatedRoute) {
    this.id = parseInt(this._activeRoute.snapshot.params['id']);
    this.registerForm = this._fb.group({
      nbGuest : [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    })
  }


  register() : void {
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      let registerBody : IRegistration = this.registerForm.value;
     this._registrationService.join(this.id , registerBody).subscribe({
      next: (res) =>{

        this._route.navigateByUrl('/gestion/wait');

      },
      complete: ()=>{},
      error: ()=>{},
     })
    }
  }

}
