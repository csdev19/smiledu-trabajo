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
  clientes = clients;
  clients_titles: Array<string> = ['Nombres','Apellidos','Direccion','Fecha de Naciminento','correo'];
  constructor( private restService: RestService) {
    // this.restService.getMostrarClienteDB()
    //   .subscribe(clientes => {
    //     this.clientes = clientes;
    //     console.log(this.clientes);
    //   });
  }

  atributosCliente = ['nombre','apellido','to_char','correo','direccion']

  ngOnInit() {
  }

    
  isVisible () {
    this.seeTable = !this.seeTable;
    this.msj = this.seeTable ? 'Ocultar Tabla de cliente' : 'Mostrar Tabla de cliente';
  }


}

const clients =  [{"nombres":"cristian fabrizio","apellidos":"sotomayor gonzales","to_char":"19/12/1998"
,"correo":"cristiansoto3@gmail.com","direccion":"Las Lilas mzn B"},
{"nombres":"luis","apellidos":"sotomayor rivera","to_char":"24/04/1950","correo":"luis01@gmail.com","direccion":"Las Lilas mzn B lote 5"},
{"nombres":"maribel","apellidos":"gonzales reque","to_char":"16/01/1945","correo":"maribel04@gmail.com","direccion":"Las Lilas mzn B lote 5"},
{"nombres":"diego","apellidos":"sotomayor gonzales","to_char":"09/09/2003","correo":"diego09@gmail.com","direccion":"Las Lilas mzn B lote 5"},
{"nombres":"allison","apellidos":"velasquez huarhua","to_char":"16/04/1998","correo":"allison04@hotmail.com","direccion":"Pamplona Baja"},
{"nombres":"cris","apellidos":"soto","to_char":null,"correo":"crist@gmail.com","direccion":null},
{"nombres":null,"apellidos":null,"to_char":null,"correo":null,"direccion":null},
{"nombres":null,"apellidos":null,"to_char":null,"correo":null,"direccion":null}]
