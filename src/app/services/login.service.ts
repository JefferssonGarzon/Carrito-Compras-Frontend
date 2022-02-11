import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.URL}/api/usuarios/listar`)
  }
}
