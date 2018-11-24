import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-cs-form-venta',
  templateUrl: './cs-form-venta.component.html',
  styleUrls: ['./cs-form-venta.component.css']
})
export class CsFormVentaComponent implements OnInit {
  // @ViewChild('id_producto') id_producto;
  // @ViewChild('id_cliente') id_cliente;
  // @ViewChild('categoria_producto') categoria_producto;
  msj: string = 'Mostrar formulario de Ventas';
  seeForm: boolean = false;
  categorias;
  id_clientes;
  id_productos;

  id_categoria;
  nombre_categoria;
  id_cliente;
  id_producto;
  precio;
  precio_show;


  constructor(private restService: RestService) {
    
    this.restService.getMostrarCategoriaDB()
      .subscribe(categorias => {
        this.categorias = categorias;
      });

    this.restService.getMostrarClienteDB()
    .subscribe(id_clientes => {
      this.id_clientes = id_clientes;
    });

    this.restService.getMostrarProductoDB()
    .subscribe(id_productos => {
      this.id_productos = id_productos;
    });

  }

  ngOnInit() {
  }

  
  obtenerCategoria(producto) {

  }

  setValuesSale(){
    // console.log(this.id_productos)
    // console.log(this.id_cliente)
    // console.log(this.categorias)
    console.log(this.precio)
    for (let row of this.id_productos) {
      // console.log(row)
      if(row.id_producto == this.id_producto) {
        this.id_categoria = row.id_categoria;
        this.precio_show = row.precio;
      }
    }

    for (let row of this.categorias) {
      if(row.id_categoria == this.id_categoria) {
        this.nombre_categoria = row.nombre_categoria;
      }
    }
  }



  isVisible () {
    this.seeForm = !this.seeForm;
    this.msj = this.seeForm ? 'Ocultar Formulario de Ventas' : 'Mostrar Formulario de Ventas';
  }

  crearVenta() {
    console.log(this.id_cliente)
    console.log(this.id_producto)
    console.log(this.precio)



    let venta = {
        'id_producto': this.id_producto,
        'id_cliente': this.id_cliente,
        'precio': this.precio
    };


    // console.log(venta);
    
    this.restService.crearVenta(venta).subscribe(
      result => {
        // console.log(result);
        return 'work';
      }, 
      error => {
        // console.log(error);
      }
      )
    return false;
  }

}
