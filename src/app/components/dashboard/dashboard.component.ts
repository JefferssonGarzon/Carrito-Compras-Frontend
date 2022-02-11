import { Component, OnInit } from '@angular/core';
import { Detalle } from 'src/app/models/detalle.model';
import { Producto } from 'src/app/models/producto.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  i; any
  contador: number = 0;
  productos: any = [];
  carritoProductos = [];
  datos: Detalle[];
  constructor(private prodService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.prodService.getProducts().subscribe(products => {
      this.productos = products;
    })
    this.carritoProductos = JSON.parse(localStorage.getItem("item"))
    console.log(this.carritoProductos);
    if (this.carritoProductos == null) {
      this.carritoProductos = []
    }
    

  }

  addCart(product) {
    if (!this.carritoProductos) {
      this.carritoProductos.push(product)
      console.log(this.carritoProductos);      
      localStorage.setItem("item", JSON.stringify(this.carritoProductos))
      Swal.fire(
        'Producto agregado',
        'El producto se agregó en el carrito',
        'success'
      )
    } else {
      this.i = this.carritoProductos.find(data => data["idProducto"] == product["idProducto"])
      console.log(this.i);
      if (this.i != undefined) {
        Swal.fire(
          'Producto existente',
          'El producto ya se encuentra en el carrito',
          'warning'
        )
      } else {
        console.log(product);
        this.carritoProductos.push(product)
        // console.log(this.carritoProductos);
        localStorage.setItem("item", JSON.stringify(this.carritoProductos))
        Swal.fire(
          'Producto agregado',
          'El producto se agregó en el carrito',
          'success'
        )
      }
    }
  }

}
