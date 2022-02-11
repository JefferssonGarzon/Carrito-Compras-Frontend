import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private articulosSubject = new BehaviorSubject([]);
  private articulos = [];
  constructor() { }

  agregarArticulo(articulo){
    this.articulosSubject.next(this.articulos)
  }

  obtenerArticulos(){
    return this.articulosSubject.asObservable();
  }
}
