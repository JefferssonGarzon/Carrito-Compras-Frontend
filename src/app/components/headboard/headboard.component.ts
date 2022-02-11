import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headboard',
  templateUrl: './headboard.component.html',
  styleUrls: ['./headboard.component.css']
})
export class HeadboardComponent implements OnInit {

  contador:number;
  user = {};
  productos = []
  isLogged = false;
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem("user"))
    console.log(this.user)
    if(this.user != null){
      this.isLogged = true
    }
    
  }

  goToCart(){
    this.productos = JSON.parse(localStorage.getItem("item"))
    console.log(this.productos);
    
  }

  logOut(){
    localStorage.removeItem("user")
    this.router.navigate(["/login"])
    this.isLogged = false
  }
}
