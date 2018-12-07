import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';


const IMAGEN = 'http://www.cartonfast.com/wp-content/uploads/2016/06/caja_de_carton_cartonfast_americana-750x750.jpg';


@Component({
  selector: 'app-cs-tab-comprar',
  templateUrl: './cs-tab-comprar.component.html',
  styleUrls: ['./cs-tab-comprar.component.css']
}) 
export class CsTabComprarComponent implements OnInit {

  imagen = IMAGEN;
  lista_productos: Array<object>;

  constructor(private restService: RestService) { 
    this.restService.getMostrarProductoTablaDB()
      .subscribe( producto => {
        this.lista_productos = producto;
        // console.log(producto);
      })   
  }

  ngOnInit() {
  }

  printer(){
    console.log(this.lista_productos);
  }

}
