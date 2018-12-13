import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';
import { RestService } from '../rest.service';
import { StorageHandlerService} from '../storage-handler.service';
import {  MAX_AMOUNT, MAX_SALES } from '../constantes';

const IMAGEN = 'http://www.cartonfast.com/wp-content/uploads/2016/06/caja_de_carton_cartonfast_americana-750x750.jpg';

@Component({
  selector: 'app-cs-tab-comprar',
  templateUrl: './cs-tab-comprar.component.html',
  styleUrls: ['./cs-tab-comprar.component.css']
}) 
export class CsTabComprarComponent implements OnInit, OnChanges {
  lista_productos: Array<object>;
  id_cliente: number = 1;
  total_ingreso;
  total_ingreso_calculo: number = 0;
  total_items: number = 0;
  imagen = IMAGEN;
  prueba_msj = 'hola vengo del padre';
  clientes ;
  card_valid: boolean = true;
  selected_client: number = 1;
  // respuesta card
  cambios: boolean;
  // respuesta al carro
  tabRespuesta;
  // recibe objeto de carrito
  eventoCarrito;
  
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
        console.log('hla antes de calcular el monto');
        console.log(res);
        this.total_ingreso = res
          .map(item => this.obtener_moneda(item.precio))
          .reduce( (acc, val) => acc+val, 0)
      });

  }

  ngOnChanges() {
    console.log('>>>>>>>>>>>>>>>>>>>>>> hola cambe ><<<<<<<<<<<<<<<<<')
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
    // console.log(this.total_ingreso);
    // this.funciona(event);
    this.eliminarEvento(event);
  }

  getOutput(event) {
    this.cambios = !this.cambios;
    console.log(event);
    this.tabRespuesta = {
      'agregado': true,
      'item_agregado': event
    }

    // this.accionCompraRealizada(event)
    event['id_cliente'] = this.id_cliente;
    this.agregarEvento(event);
  }


  agregarEvento (event) {  
    // se agrega si las restricciones lo permiten
    let suma_previa = this.obtenerTotal() + this.obtener_moneda(event.precio) 
    if( suma_previa <= MAX_AMOUNT && this.total_items < MAX_SALES ) {
      this.storage.storeOnLocalStorage(event);
      this.total_items++;
      this.total_ingreso = this.obtenerTotal(); 
      this.valid()
    } 
    // sino se resta la cantidad aumentada para el calculo
    else {
      // this.restarMonto(event .precio);
      this.invalid();
    } 
  }

  obtenerTotal(): number  {
    return this.storage.getOnLocalStorage()
      .map( item => this.obtener_moneda(item.precio))
      .reduce( (acc, val) => acc + val, 0)
  }

  eliminarEvento () {
    if( this.total_ingreso <= MAX_AMOUNT && this.total_items < MAX_SALES ) {
      this.valid()
    } else {
      // this.restarMonto(event.precio);
      this.total_items--;
      this.invalid();
    }
  }



  restarMonto(valor): number {
    return this.total_ingreso + valor;    
  }

  sumarMonto(valor): number {
    return this.total_ingreso + valor;    
  }

  
  calcular_monto(valor) {
    this.total_ingreso = (valor >= 0) ? this.sumarMonto(valor) : this.restarMonto(valor);
  }

  valid() {
    this.card_valid = true;
  }

  accionCompraRealizada(event) {
    console.log('tab comprar accion realizadda')
    console.log(event)
    // let evento = event;
    this.handlerEventoCarrito(event)
    this.eventoCarrito = {}; 
    // this.total_ingreso = event;
  }

  handlerEventoCarrito(obj) {
    console.log(obj);
    if (obj['borrado']) {
      let itemRestado = obj['id_borrado'];
      console.log('itemRestado')
      console.log(itemRestado)
      this.storage.deleteOnLocalStorageById(itemRestado);
      console.log('elemento borrado ',obj['elemento_borrado']);
      // this.valid();
      this.eliminarEvento();
      // this.restarMonto(obj['elemento_borrado'] ); 

      this.total_items--;

      this.total_ingreso = this.obtenerTotal();
      console.log('hola ', this.total_ingreso);
      this.tabRespuesta = {
        'borrado' : 'borrado con exito'
      };

    } 
    if (obj['comprado']) {
      console.log('esto ocurro si comprado es true')
    }

  }

  invalid() {
    this.card_valid = false;
  }
  
  obtener_moneda(valor){
    return parseFloat(valor);
  }
  

  noExiste():boolean {
    return this.storage.isEmpty();
  }

  borrar() {
    this.storage.deleteOnLocalStorage();
  }


}
