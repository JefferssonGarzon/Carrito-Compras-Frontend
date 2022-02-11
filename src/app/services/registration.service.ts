import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  URL = "http://localhost:8080/api/usuarios/crear"
  constructor(private http: HttpClient) { }

  public regUser(usuario:Usuario){
    return this.http.post(this.URL, usuario);
  }
}
