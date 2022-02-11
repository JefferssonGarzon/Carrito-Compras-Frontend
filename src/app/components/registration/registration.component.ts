import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userReg = Usuario;
  regForm = new FormGroup({
    nombre: new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)])),
    apellido: new FormControl("", Validators.compose([Validators.required, Validators.minLength(4)])),
    email: new FormControl("", Validators.compose([Validators.required, Validators.email])),
    telefono: new FormControl("", Validators.compose([Validators.required, Validators.minLength(10)])),
    username: new FormControl("", Validators.compose([Validators.required])),
    password: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(5)])),
    rol: new FormControl("3", Validators.required),
  })

  constructor(private regService: RegistrationService, private router:Router) { }

  obj = {};
  ngOnInit(): void {
  }

  registrarUsuario(){
    
    this.obj = {
      "idRol":Number(this.regForm.value["rol"])
    }
    this.regForm.value["rol"] = this.obj;
    console.log(this.regForm.value);
    console.log(typeof(this.regForm.value["rol"]["idRol"]));

    this.regService.regUser(this.regForm.value).subscribe(data => {
      console.log(data);
    })
    this.router.navigate(["/login"])
    
  }

}
