import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input()titulo:string;//cuando llamemos a este menu con <app-header> le tenemos que pasar -> titulo" Nombre del titulo" <- para que s emuestre

  constructor() { }

  ngOnInit() {}

}
