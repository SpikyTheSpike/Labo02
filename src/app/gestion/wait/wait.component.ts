import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.scss']
})
export class WaitComponent implements OnInit{
  constructor(private _route : Router){}

  ngOnInit(): void {
    this._route.navigateByUrl('/gestion/accueil');
  }
}
