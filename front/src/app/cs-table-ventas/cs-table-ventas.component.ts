import { Component, OnInit, OnChanges, DoCheck, AfterContentInit } from '@angular/core';
import { RestService } from '../rest.service';

interface Venta {
  nombre: string,
  producto:string,
  fecha: string,
  precio: number
}

@Component({
  selector: 'app-cs-table-ventas',
  templateUrl: './cs-table-ventas.component.html',
  styleUrls: ['./cs-table-ventas.component.css']
})

export class CsTableVentasComponent implements OnInit, OnChanges {
  ventas;
  productos;
  clientes;
  lista_ventas: Array<Venta>;
  seeTable: boolean = false;
  msj: string = 'Mostrar Tabla de Ventas'
  sales_titles: Array<string> = ['id_producto','id_cliente','fecha_compra','precio_venta',]
  atributosVenta = ["nombre_producto","nombres","precio_venta","to_char"]
  
  constructor(private restService: RestService) {}
    // console.log('hola esto se creo en que mone
 
  ngOnInit() {
    this.restService.getMostrarVentasDB()
      .subscribe(ventas => {
      this.ventas = ventas;
        // console.log(this.ventas);
    });

      // this.refresh();
  }
    
    ngOnChanges() {
      console.log('hola esto se creo en que monento ?')

    }


    refresh () {
      this.restService.getMostrarVentasDB()
      .subscribe(ventas => {
        this.ventas = ventas;
        // console.log(this.ventas);
      });
    }


   
  verVentas(){

    // console.log(this.ventas);
  } 
  isVisible () {
    this.seeTable = !this.seeTable;
    this.msj = this.seeTable ? 'Ocultar Tabla de Ventas' : 'Mostrar Tabla de Ventas';
  }

  
}
