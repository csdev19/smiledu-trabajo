import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';


const IMAGEN = 'http://www.cartonfast.com/wp-content/uploads/2016/06/caja_de_carton_cartonfast_americana-750x750.jpg';



@Component({
  selector: 'app-cs-card-elemento-compra',
  templateUrl: './cs-card-elemento-compra.component.html',
  styleUrls: ['./cs-card-elemento-compra.component.css']
})
export class CsCardElementoCompraComponent implements OnInit {
  imagen = IMAGEN;
  @Input() producto_item;

  @Output() resolve = new EventEmitter(); 

  constructor() {}

  ngOnInit() {
  }

  ver() {
    console.log(this.producto_item);
    this.cardEmitter();
  }
  
  cardEmitter() {
    this.resolve.emit('hola estoy siendo emitido');
  }

}
