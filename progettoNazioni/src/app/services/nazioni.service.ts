import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NazioniService {

  constructor(private http:HttpClient) {

   }
   getAllNazioni(){
    return this.http.get('https://restcountries.com/v3.1/all')
   }
   getNazione(nome:string){
    return this.http.get(`https://restcountries.com/v3.1/name/${nome}`)

   }

}
//https://restcountries.com/v3.1/all
//https://restcountries.com/v3.1/name/{name}
