import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RestService } from '../rest.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-cs-table-update-producto',
  templateUrl: './cs-table-update-producto.component.html',
  styleUrls: ['./cs-table-update-producto.component.css']
})
export class CsTableUpdateProductoComponent implements OnInit, OnChanges {
  @Input()obj = null;
  seeTable: boolean = false;
  msj: string = 'Mostrar Tabla de Productos';
  productos;
  product_titles: Array<string> = ['nombre producto', 'precio', 'categoria'];
  categorias;

  nombre_producto;
  nombre_categoria;
  id_categoria;
  precio;
  id_producto;

  constructor(private restService: RestService) {
    this.restService.getMostrarProductoDB()
     .subscribe( productos => {
       this.productos = productos;

     })
     
     this.restService.getMostrarCategoriaDB()
     .subscribe( categoria => {
       this.categorias = categoria;
     })
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.obj);
    this.nombre_producto = this.obj.nombre_producto;
    this.id_categoria= this.obj.id_categoria;
    this.precio = this.obj.precio;
    this.id_producto = this.obj.id_producto;
  }

  // update() {
  //   let producto = {
  //     'nombre_producto' : this.nombre_producto ,
  //     'id_categoria' : this.id_categoria,
  //     'precio' : this.precio,
  //     'id_producto' : this.id_producto,
  //   }
  //   console.log(producto);

  //   this.restService.actualizarProducto(producto) 
  //     .subscribe(
  //       result => {
  //         // console.log(result);
  //         return 'work';
  //       }, 
  //       error => {
  //         // console.log(error);
  //       }
  //     )
  // }

  isVisible () {
    this.seeTable = !this.seeTable;
    this.msj = this.seeTable ? 'Ocultar Actualizar Tabla de Productos' : 'Mostrar Actualizar Tabla de Productos';
  }

  setValuesSale(){
    // console.log(this.id_productos)
    // console.log(this.id_cliente)
    // console.log(this.categorias)
    console.log(this.precio)
    for (let row of this.productos) {
      // console.log(row)
      if(row.id_producto == this.id_producto) {
        this.nombre_producto = row.nombre_producto ;
        this.nombre_categoria = row.nombre_categoria;
        this.precio = row.precio;
        this.id_producto = row.id_producto;
      }
    }

    // for (let row of this.categorias) {
    //   if(row.id_categoria == this.id_categoria) {
    //     this.nombre_categoria = row.nombre_categoria;
    //   }
    // }
  }


  updateVenta() {

    let venta = {
      'nombre_producto' : this.nombre_producto,
      'nombre_categoria' : this.nombre_categoria,
      'precio' : this.precio,
      'id_producto' : this.id_producto
    };


    console.log(venta);
    
    
    this.restService.actualizarProducto(venta).subscribe(
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
