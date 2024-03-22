import { Component } from '@angular/core';
import { Elemento } from './model/Elemento';
import { ElementsService } from './service/elements.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progettoTable';
  listaElemento: Elemento[] = [];

  constructor(private elementService: ElementsService ){}

  ngOnInit(){
    this.elementService.getElements().subscribe({
      next: (e: any)=>{
        this.listaElemento=e;
        console.log(this.listaElemento);
      }
    })
    

  }

}
