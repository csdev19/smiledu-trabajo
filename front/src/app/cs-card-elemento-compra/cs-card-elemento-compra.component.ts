import { Component, OnInit,OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {  MAX_AMOUNT, MAX_SALES } from '../constantes';
import {MatSnackBar} from '@angular/material';

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

  constructor(public snackBar: MatSnackBar) {}
  
  ngOnInit() {
    
    // console.log('ngoninit')
    // console.log(this.producto_item)
  }

  ngOnChanges() {
    if(!this.valid_card) {
      setTimeout(() => {
        this.openSnackBar('El numero de elementos en el carro','Pasó las restricciones',1000);
      }, 250);
    } 
  }
  

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

  openSnackBar(message: string, action: string, time: number) {
    this.snackBar.open(message, action, {
      duration: time,
    });
  }

}
