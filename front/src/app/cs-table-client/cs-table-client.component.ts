import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from "../rest.service"; 

@Component({
  selector: 'app-cs-table-client',
  templateUrl: './cs-table-client.component.html',
  styleUrls: ['./cs-table-client.component.css']
})
export class CsTableClientComponent implements OnInit {
  seeTable: boolean = false;
  msj: string = 'Mostrar Tabla de cliente';
  clientes;
  clients_titles: Array<string> = ['Nombres','Apellidos','Direccion','Fecha de Naciminento','correo'];
  constructor( private restService: RestService) {
    this.restService.getMostrarClienteDB()
      .subscribe(clientes => {
        this.clientes = clientes;
        console.log(this.clientes);
      });
  }


  ngOnInit() {
  }

    
  isVisible () {
    this.seeTable = !this.seeTable;
    this.msj = this.seeTable ? 'Ocultar Tabla de cliente' : 'Mostrar Tabla de cliente';
  }

  
}
