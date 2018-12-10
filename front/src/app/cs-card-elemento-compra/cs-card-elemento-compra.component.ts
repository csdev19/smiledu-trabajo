import { Component, OnInit,OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {  MAX_AMOUNT, MAX_SALES } from '../constantes';

const IMAGEN = 'http://www.cartonfast.com/wp-content/uploads/2016/06/caja_de_carton_cartonfast_americana-750x750.jpg';



@Component({
  selector: 'app-cs-card-elemento-compra',
  templateUrl: './cs-card-elemento-compra.component.html',
  styleUrls: ['./cs-card-elemento-compra.component.css']
})
export class CsCardElementoCompraComponent implements OnInit, OnChanges {
  imagen = IMAGEN;
  @Input() producto_item;
  @Input() msj;
  @Input() id_cliente;
  @Input() valid_card;
  @Output() resolve = new EventEmitter(); 

  constructor() {
  }
  
  ngOnInit() {
    
    // console.log('ngoninit')
    // console.log(this.producto_item)
  }

  ngOnChanges() {}
  
  ver() {
    console.log(this.valid_card);
  }

  agregar() {
    this.producto_item['precio_venta'] = this.producto_item.precio;
    this.cardEmitter();
  }  

  cardEmitter() {
    this.resolve.emit(this.producto_item);
  }

}
