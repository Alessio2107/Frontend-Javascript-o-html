import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NazioniService } from '../services/nazioni.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent {
  nomeNazione: string='';
  nazioneSingola:any
  constructor(private activatedRoute: ActivatedRoute,
    private nazioniService: NazioniService){

  }
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe({
      next:(res:any) =>{
        this.nomeNazione = res.params.name.toUpperCase();
        console.log(this.nomeNazione);

        this.nazioniService.getNazione
        (this.nomeNazione).
        subscribe({
          next: (res:any) =>{
            this.nazioneSingola = res;
            console.log(this.nazioneSingola);
          }
        })

        
      }
    });
    
    
  }


}
