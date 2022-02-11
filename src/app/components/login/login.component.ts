import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  refEmail: string;
  refPassword: any;
  loginForm = new FormGroup({
    email: new FormControl("", Validators.compose([Validators.required, Validators.email])),
    password: new FormControl("", Validators.compose([Validators.required, Validators.minLength(4)]))
  })

  constructor(private loginService: LoginService, private router: Router) { }
  users: any = [];
  userValidation;
  ngOnInit(): void {
    this.obtenerUsuarios()

  }

  obtenerUsuarios() {

    this.loginService.getUsers().subscribe(data => {
      console.log(data)
      this.users = data
      console.log(this.users)

    })
  }

  login() {
    this.refEmail = this.loginForm.value["email"]
    this.refPassword = this.loginForm.value["password"]
    console.log(this.refEmail);
    this.userValidation = this.users.find(data => (data["email"] == this.refEmail && data["password"] == this.refPassword))
    if (this.userValidation != undefined) {
      localStorage.setItem("user", JSON.stringify(this.loginForm.value))
      this.router.navigate(["/dashboard"])

    } else {
      console.log("email y/o la constraseña son incorrectas");

    }
  }

}
