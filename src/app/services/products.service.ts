import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL = "http://localhost:8080/api/productos/listar"
  
  constructor(private http: HttpClient) { }

  public getProducts(){
    return this.http.get(this.URL)
  }
}
