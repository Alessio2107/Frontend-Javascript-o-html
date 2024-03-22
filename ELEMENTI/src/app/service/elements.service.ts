import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  constructor(private http:HttpClient) { }
  getElements(){
    return this.http.get('http://localhost:8098/elementoController/mostraTuttiGliElementi')
  }
}
//return this.http.get('http://192.168.233.134:8080/api/elementi/getAllElementi')
