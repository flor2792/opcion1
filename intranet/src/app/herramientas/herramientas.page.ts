import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.page.html',
  styleUrls: ['./herramientas.page.scss'],
  
})
export class HerramientasPage implements OnInit {
  @ViewChild(IonContent, {static: false}) content: IonContent;  

  constructor(  private _router: Router,
    ) { }

  ngOnInit() {

  }
  

  volverInicio(){
    this._router.navigate(['/home']);//vuelve a home
  }
  
 
 
    
    
  
    
}

