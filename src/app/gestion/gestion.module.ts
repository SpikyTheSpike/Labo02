import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { GestionComponent } from './gestion.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyeventsComponent } from './myevents/myevents.component';
import { MyreservationsComponent } from './myreservations/myreservations.component';
import { WaitComponent } from './wait/wait.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';






@NgModule({
  declarations: [
    GestionComponent,
    AccueilComponent,
    LoginComponent,
    RegisterComponent,
    MyeventsComponent,
    MyreservationsComponent,
    WaitComponent,
    DetailEventComponent,
    CreateEventComponent,
    UpdateEventComponent,
    CreateRegistrationComponent,
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class GestionModule {

 }
