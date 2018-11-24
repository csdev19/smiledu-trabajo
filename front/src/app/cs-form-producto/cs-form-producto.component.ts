import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-cs-form-producto',
  templateUrl: './cs-form-producto.component.html',
  styleUrls: ['./cs-form-producto.component.css']
})
export class CsFormProductoComponent implements OnInit {
  msj = 'Mostrar Formulario de Productos';
  seeForm = false;
  nombre_producto;
  precio;
  id_categoria;
  categorias;
  

  constructor(private restService: RestService) {
    
    this.restService.getMostrarCategoriaDB()
      .subscribe(categorias => {
        this.categorias = categorias;
      });


  }


  ngOnInit() {
  }


  isVisible () {
    this.seeForm = !this.seeForm;
    this.msj = this.seeForm ? 'Ocultar Formulario de Productos' : 'Mostrar Formulario de Productos';
  }

  crearVenta() {
    // console.log(this.id_cliente)
    // console.log(this.id_producto)
    // console.log(this.precio)



    let producto = {
        'nombre_producto': this.nombre_producto,
        'precio': this.precio,
        'id_categorias': this.id_categoria,
    };


    console.log(producto);
    
    this.restService.agregarProducto(producto).subscribe(
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
