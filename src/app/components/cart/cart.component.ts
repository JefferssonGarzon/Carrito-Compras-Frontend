import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detalle } from 'src/app/models/detalle.model';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productos = []
  detalle: Detalle[]
  constructor(private cartService: CartService, private router:Router) { }

  articulos = [];
  cantidad:number = 1;
  i: any;
  ngOnInit() {
    this.articulos = JSON.parse(localStorage.getItem("item"))
    console.log(this.articulos);
  }

  crearDetalles(){

  }

  eliminarItem(articulo) {
    this.i = this.articulos.indexOf(articulo)    
    if (this.i !== -1) {
      this.articulos.splice(this.i, 1)
      localStorage.setItem("item", JSON.stringify(this.articulos))
      this.articulos = JSON.parse(localStorage.getItem("item"))
    }
  }

  cambiarCantidad(valor){
    this.cantidad = valor
  }

  pagar(){
    Swal.fire(
      'Compra exitosa',
      'La compra se hizo satisfactoriamente',
      'success'
    ),
    this.router.navigate(["/dashboard"])
    localStorage.removeItem("item")
  }
}
