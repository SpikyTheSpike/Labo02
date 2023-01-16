import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './gestion/gestion.component';

const routes: Routes = [
  { path : 'gestion', component : GestionComponent, loadChildren : () => import("./gestion/gestion.module").then(m => m.GestionModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
