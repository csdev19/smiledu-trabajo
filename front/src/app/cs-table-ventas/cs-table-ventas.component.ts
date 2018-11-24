import { Component, OnInit } from '@angular/core';
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

export class CsTableVentasComponent implements OnInit {
  ventas;
  productos;
  clientes;
  lista_ventas: Array<Venta>;
  sales_titles: Array<string> = ['id_producto','id_cliente','fecha_compra','precio_venta',]
  
  constructor(private restService: RestService) {
    
    this.restService.getMostrarVentasDB()
      .subscribe(ventas => {
        this.ventas = ventas;
        console.log(this.ventas);
      });
 
      // this.setListSales();
    }
    
    // for (let row of this.id_productos) {
    //   // console.log(row)
    //   if(row.id_producto == this.id_producto) {
    //     this.categoria = row.id_categoria;
    //     this.precio = row.precio;
    //   }

    // setListSales(){
    //   let lista_aux = [];
    //   for (let row of this.ventas) {
    //     lista_aux.push(row.fecha_compra);
    //   }

    //   // this.ventas.sort();
    //   // console.log(this.ventas);
    // }
    
    ngOnInit() {
    }
    

  verVentas(){

    console.log(this.ventas);
  }
  
}
