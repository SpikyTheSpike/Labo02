import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Labo02';
  constructor(private _route : Router){}

  ngOnInit(): void {
    this._route.navigateByUrl('/gestion/wait');
  }

}
