import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { StorageHandlerService} from '../storage-handler.service';
import {  MAX_AMOUNT, MAX_SALES } from '../constantes';

const IMAGEN = 'http://www.cartonfast.com/wp-content/uploads/2016/06/caja_de_carton_cartonfast_americana-750x750.jpg';

@Component({
  selector: 'app-cs-tab-comprar',
  templateUrl: './cs-tab-comprar.component.html',
  styleUrls: ['./cs-tab-comprar.component.css']
}) 
export class CsTabComprarComponent implements OnInit {
  lista_productos: Array<object>;
  id_cliente: number = 1;
  cambios: boolean;
  total_ingreso;
  total_ingreso_calculo: number = 0;
  total_items: number = 0;
  imagen = IMAGEN;
  prueba_msj = 'hola vengo del padre';
  clientes ;
  card_valid: boolean = true;
  selected_client: number = 1;
  constructor(
    private restService: RestService,
    private storage: StorageHandlerService
  ) { 
    this.restService.getMostrarProductoTablaDB()
      .subscribe( producto => this.lista_productos = producto)

    this.restService.getMostrarClienteDB()
      .subscribe(clientes => this.clientes = clientes);  
    
  }

  ngOnInit() {
    // this.storage.getOnLocalStorage();
    let result = this.storage.getOnLocalStorageObservable()
      .subscribe( res => {
        this.total_ingreso = res
          .map(item => this.obtener_moneda(item.precio))
          .reduce( (acc, val) => acc+val, 0)
      });
    // this.total_ingreso = storage_let;
    console.log('this.total_ingreso');
    console.log(this.total_ingreso);
    //   .map( (item) => {
    //     return this.obtener_moneda(item.precio)
    //   })
    //   .reduce( (acc, val) => {
    //     return acc + val;
    //   }, 0);
    // this.total_ingreso_calculo = this.total_ingreso; 
  }

  valor() {
    // this.valorCambio = !this.valorCambio;
    // return this.valorCambio; 
    return 'hola';
  }

  recibirEliminado(event) {
    // console.log('event eliminar');
    // console.log(event);
    this.total_ingreso -= this.obtener_moneda(event.precio)
    console.log(this.total_ingreso);
    // this.funciona(event);
    this.eliminarEvento(event);
  }

  getOutput(event) {
    this.cambios = !this.cambios;
    this.total_items++;
    console.log('tab comprar')
    console.log(event)
    event['id_cliente'] = this.id_cliente;
    this.calcular_monto(event.precio);
    this.agregarEvento(event);
  }
  eliminarEvento (event) {
    if( this.total_ingreso <= MAX_AMOUNT && this.total_items < MAX_SALES ) {
      // console.log('this.total_ingreso');
      // console.log(this.total_ingreso);
      // this.storage.storeOnLocalStorage(event);
      // this.storage.storeOnLocalStorage(event);
      this.valid()

    } else {
      // console.log('cuando isvalid es falso')
      // console.log(this.total_ingreso);
      this.restarMonto(event.precio);
      // console.log(this.total_ingreso);
      this.invalid();
    }
  }
  agregarEvento (event) {  
    // se agrega si las restricciones lo permiten
    if( this.total_ingreso <= MAX_AMOUNT && this.total_items < MAX_SALES ) {
      this.storage.storeOnLocalStorage(event);
      this.valid()
      // this.storage.storeOnLocalStorage(event);
    } 
    // sino se resta la cantidad aumentada para el calculo
    else {
      // console.log('cuando isvalid es falso')
      // console.log(this.total_ingreso);
      this.restarMonto(event.precio);
      // console.log(this.total_ingreso);
      this.invalid();
    } 
  }

  restarMonto(valor) {
    valor = this.obtener_moneda(valor)
    this.total_ingreso-= valor;    
  }

  
  calcular_monto(valor) {
    valor = this.obtener_moneda(valor)
    this.total_ingreso+= valor;
  }

  valid() {
    this.card_valid = true;

  }

  invalid() {
    this.card_valid = false;
  }
  
  obtener_moneda(valor){
    let money = valor;
    let precio;
    // console.log(money);}
    precio = money.slice(1, money.length);
    // if (money[ money.length - 1 ] ) {
    //   precio = money.slice(0, money.length  - 1);
    // }
    if (money.search(',') != -1) {
      precio = precio.replace(",","")
    }
    // if (money.search(',') != -1) {
    //     precio = precio.replace(",",".")
    // }
    // console.log(precio)
    return parseFloat(precio);
  }
  

  noExiste():boolean {
    return this.storage.isEmpty();
  }

  borrar() {
    this.storage.deleteOnLocalStorage();
  }


}
