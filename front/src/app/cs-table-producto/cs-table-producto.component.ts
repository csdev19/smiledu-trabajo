import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-cs-table-producto',
  templateUrl: './cs-table-producto.component.html',
  styleUrls: ['./cs-table-producto.component.css']
})
export class CsTableProductoComponent implements OnInit {
  seeTable: boolean = false;
  msj: string = 'Mostrar Tabla de Productos';
  productos;
  product_titles: Array<string> = ['nombre producto', 'precio', 'categoria'];
  formHidden: boolean = false;
  id_categoria = 22;
  categorias;
  obj;

  constructor(private restService: RestService) { 
    this.restService.getMostrarProductoTablaDB()
      .subscribe( producto => {
        this.productos = producto;
        console.log(producto);
      })

      
  }

  ngOnInit() {
  }
     
  setThings(id_product) {
    
    this.formHidden = !this.formHidden;
    for (let row of this.productos) {
      // console.log(row)
      if(row.id_producto == id_product) {
        this.obj = {
          'nombre_producto': row.nombre_producto,
          'precio': row.precio,
          'id_categoria': row.id_categoria, 
          'id_producto': id_product 
        }
      }
    }
  }


  refresh() {
    this.restService.getMostrarProductoTablaDB()
      .subscribe( producto => {
        this.productos = producto;
        console.log(producto);
      })
  }

  isVisible () {
    this.seeTable = !this.seeTable;
    this.msj = this.seeTable ? 'Ocultar Tabla de Productos' : 'Mostrar Tabla de Productos';
  }


}
