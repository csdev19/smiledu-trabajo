import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-cs-table-categoria',
  templateUrl: './cs-table-categoria.component.html',
  styleUrls: ['./cs-table-categoria.component.css']
})
export class CsTableCategoriaComponent implements OnInit {
  seeTable: boolean = false;
  msj: string = 'Mostrar Tabla de Categorias';
  categorias = INFO;
  categories_titles: Array<string> = ['id_categoria','nombre_categoria']
  constructor( private restService: RestService) {
    this.restService.getMostrarCategoriaDB()
      .subscribe(categoria => {
        this.categorias = categoria;
        // console.log(this.categorias);
      });
  }

  ngOnInit() {
  }
  
  refresh () {
    this.restService.getMostrarCategoriaDB()
      .subscribe(categoria => {
        this.categorias = categoria;
        // console.log(this.categorias);
      });
  }
  isVisible () {
    this.seeTable = !this.seeTable;
    this.msj = this.seeTable ? 'Ocultar Tabla de Categorias' : 'Mostrar Tabla de Categorias';
  }

}

const INFO = [{"id_categoria":1,"nombre_categoria":"deportes"},
              {"id_categoria":2,"nombre_categoria":"vestimenta"},
              {"id_categoria":3,"nombre_categoria":"tecnologia"}]