import { Component, OnInit, Inject } from '@angular/core';
import { RestService } from "../rest.service"; 
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';


export interface VentaElemento {
  id_producto: number,
  id_clientes: number,
  fecha_compra: string,
  precio_venta: number,
}


@Component({
  selector: 'app-cs-form-venta',
  templateUrl: './cs-form-venta.component.html',
  styleUrls: ['./cs-form-venta.component.css']
})
export class CsFormVentaComponent implements OnInit {
  msj: string = 'Mostrar formulario de Ventas';
  seeForm: boolean = false;
  categorias;
  id_clientes;
  id_productos;

  id_categoria;
  nombre_categoria;
  precio;
  precio_show;

  id_producto;
  id_cliente;
  fecha_compra;
  precio_venta;

  venta_nueva;


  constructor(private restService: RestService, public dialog: MatDialog) {

  }

  ngOnInit() {
  }

  
  openDialog(): void {
    const dialogRef = this.dialog.open(CsFormVentaDialogComponent, {
      width: '800px',
      data: {
        id_producto: this.id_producto,
        id_cliente: this.id_cliente,
        fecha_compra: this.fecha_compra,
        precio_venta: this.precio_venta
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      // this.nombre_categoria = result;
      this.venta_nueva = result;
    });
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


    console.log(venta);
    
    // this.restService.crearVenta(venta).subscribe(
    //   result => {
    //     // console.log(result);
    //     return 'work';
    //   }, 
    //   error => {
    //     // console.log(error);
    //   }
    //   )
    return false;

    
  }

}



@Component({
  selector: 'app-cs-form-venta-dialog',
  templateUrl: './cs-form-venta-dialog.component.html',
})
export class CsFormVentaDialogComponent implements OnInit {
  // @ViewChild('id_producto') id_producto;
  // @ViewChild('id_cliente') id_cliente;
  // @ViewChild('categoria_producto') categoria_producto;
  msj: string = 'Mostrar formulario de Ventas';
  seeForm: boolean = false;
  categorias;
  clientes;
  productos;

  
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
    .subscribe(clientes => {
      this.clientes = clientes;
    });

    this.restService.getMostrarProductoDB()
    .subscribe(productos => {
      this.productos = productos;
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
    // for (let row of this.id_productos) {
    //   // console.log(row)
    //   if(row.id_producto == this.id_producto) {
    //     this.id_categoria = row.id_categoria;
    //     this.precio_show = row.precio;
    //   }
    // }

    // for (let row of this.categorias) {
    //   if(row.id_categoria == this.id_categoria) {
    //     this.nombre_categoria = row.nombre_categoria;
    //   }
    // }
  }





}

