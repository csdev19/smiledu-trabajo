import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { StorageHandlerService} from '../storage-handler.service';

const IMAGEN = 'http://www.cartonfast.com/wp-content/uploads/2016/06/caja_de_carton_cartonfast_americana-750x750.jpg';


@Component({
  selector: 'app-cs-tab-comprar',
  templateUrl: './cs-tab-comprar.component.html',
  styleUrls: ['./cs-tab-comprar.component.css']
}) 
export class CsTabComprarComponent implements OnInit {
  cambios: boolean;
  imagen = IMAGEN;
  lista_productos: Array<object>;
  clientes ;
  selected_client: number = 1;
  constructor(
    private restService: RestService,
    private storage: StorageHandlerService
  ) { 
    this.restService.getMostrarProductoTablaDB()
      .subscribe( producto => {
        this.lista_productos = producto;
        // console.log(producto);
      })

    this.restService.getMostrarClienteDB()
      .subscribe(clientes => {
        this.clientes = clientes;
        console.log(this.clientes);
      });  
    // this.storage.storeOnLocalStorage(this.lista_productos[0]);
  }

  valor() {
    // this.valorCambio = !this.valorCambio;
    // return this.valorCambio; 
    return 'hola';
  }

  ngOnInit() {
  }

  getOutput(event) {
    console.log('estamos en getoutput');
    console.log(event);
    // this.cambios = event;
    this.cambios = !this.cambios;
    this.storage.storeOnLocalStorage(event);

  }

  noExiste():boolean {
    return this.storage.isEmpty();
  }

  borrar() {
    this.storage.deleteOnLocalStorage();
  }
  printer(){
    console.log(this.lista_productos);
  }

}
