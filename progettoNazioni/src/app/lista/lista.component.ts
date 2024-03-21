import { Component } from '@angular/core';
import { NazioniService } from '../services/nazioni.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  listaNazioni!: any[];
  
  constructor(private nazioniService: NazioniService){
    
  }

  ngOnInit(){
    this.nazioniService.getAllNazioni().subscribe(
      {
        next:(res : any)=>{
          this.listaNazioni = res;
          console.log(this.listaNazioni);
        }
      }
    )
    
  }
  passaNome(nome:string){
    //console.log(nome);
    this.nazioniService.getNazione(nome).subscribe({
      next:(res : any)=>{
        console.log(res);
      }
    });
  }

//subscribe() per accesso ai dati

}
