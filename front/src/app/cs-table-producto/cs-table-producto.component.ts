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

  atributosProducto = ['id_producto', 'nombre_producto', 'precio', 'nombre_categoria']

  
  constructor(private restService: RestService) { 
    this.restService.getMostrarProductoTablaDB()
      .subscribe( producto => {
        this.productos = producto;
        // console.log(producto);
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
        // console.log(producto);
      })
  }

  isVisible () {
    this.seeTable = !this.seeTable;
    this.msj = this.seeTable ? 'Ocultar Tabla de Productos' : 'Mostrar Tabla de Productos';
  }


}

const PRODUCTS = [{"id_producto":1,"nombre_producto":"bicicleta","precio":"123,04 €","id_categoria":1},{"id_producto":2,"nombre_producto":"pesas","precio":"93,00 €","id_categoria":1},{"id_producto":3,"nombre_producto":"raqueta","precio":"100,00 €","id_categoria":1},{"id_producto":4,"nombre_producto":"camiseta","precio":"50,00 €","id_categoria":2},{"id_producto":5,"nombre_producto":"pantalon","precio":"50,00 €","id_categoria":2},{"id_producto":6,"nombre_producto":"pantalon caqui","precio":"80,00 €","id_categoria":2},{"id_producto":7,"nombre_producto":"laptop hp","precio":"2.000,00 €","id_categoria":3},{"id_producto":8,"nombre_producto":"computadora","precio":"2.000,00 €","id_categoria":3},{"id_producto":9,"nombre_producto":"celular huawei","precio":"2.500,00 €","id_categoria":3},{"id_producto":10,"nombre_producto":"iphone","precio":"3.000,00 €","id_categoria":3}]