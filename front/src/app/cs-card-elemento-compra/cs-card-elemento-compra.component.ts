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

  constructor(
  ) {
    // console.log(MAX_AMOUNT);
    // console.log(MAX_SALES);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log('estamos en card');
    // console.log(this.valid_card);
  }
  
  ver() {
    console.log(this.valid_card);
    // console.log(this.msj);
    // console.log(this.producto_item);
  }
  agregar() {
    // console.log('estamos en card')
    // console.log(this.producto_item)
    // // console.log('cliente es: ', this.id_cliente);
    this.producto_item['id_cliente'] = this.id_cliente;
    this.producto_item['precio_venta'] = this.producto_item.precio;
    // console.log(this.producto_item)
    this.cardEmitter();
    console.log(this.valid_card);
  }  

  cardEmitter() {
    console.log('se devolvio '+ this.producto_item);
    this.resolve.emit(this.producto_item);
  }

}
