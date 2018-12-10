import { Component, OnInit, Inject } from '@angular/core';
import { RestService } from "../rest.service"; 
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import {FormControl} from '@angular/forms';


export interface VentaElemento {
  id_producto: number,
  id_cliente: number,
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

    // console.log(this.venta_nueva);
    
    this.restService.crearVenta(this.venta_nueva).subscribe(
      result => {
        // console.log(result);
        return 'work';
      }, 
      error => {
        // console.log(error);
      }
      )

    this.venta_nueva = null;
    return false;

    
  }

}



@Component({
  selector: 'app-cs-form-venta-dialog',
  templateUrl: './cs-form-venta-dialog.component.html',
})
export class CsFormVentaDialogComponent implements OnInit {
  msj: string = 'Mostrar formulario de Ventas';
  seeForm: boolean = false;
  
  
  categorias;
  clientes;
  productos;

  

  id_producto: number;
  id_cliente: number;
  precio_venta: number;
  fecha_compra = new FormControl(new Date());

  constructor(
    private restService: RestService, public dialogRef: MatDialogRef<CsFormVentaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VentaElemento) {
    

    this.restService.getMostrarClienteDB()
    .subscribe(clientes => {
      this.clientes = clientes;
    });

    this.restService.getMostrarProductoDB()
    .subscribe(productos => {
      this.productos = productos;
    });

  }

  ngOnInit() {}


  setSale () {
    this.data.id_producto = this.id_producto; 
    this.data.id_cliente = this.id_cliente;
  }

}

