import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { GestionComponent } from './gestion.component';
import { LoginComponent } from './login/login.component';
import { MyeventsComponent } from './myevents/myevents.component';
import { MyreservationsComponent } from './myreservations/myreservations.component';
import { RegisterComponent } from './register/register.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { WaitComponent } from './wait/wait.component';

const routes: Routes = [
  { path : 'gestion', component : GestionComponent },
  { path : 'accueil', component : AccueilComponent },
  { path : 'login', component : LoginComponent },
  { path : 'register', component : RegisterComponent },
  { path : 'myevents', component : MyeventsComponent },
  { path : 'myreservations', component : MyreservationsComponent },
  { path : 'wait', component : WaitComponent },
  { path : 'detail/:id', component : DetailEventComponent },
  { path : 'create', component : CreateEventComponent },
  { path : 'update/:id', component : UpdateEventComponent },
  { path : 'create/:id', component : CreateRegistrationComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
