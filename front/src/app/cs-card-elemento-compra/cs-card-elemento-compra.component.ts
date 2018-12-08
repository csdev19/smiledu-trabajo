import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const IMAGEN = 'http://www.cartonfast.com/wp-content/uploads/2016/06/caja_de_carton_cartonfast_americana-750x750.jpg';



@Component({
  selector: 'app-cs-card-elemento-compra',
  templateUrl: './cs-card-elemento-compra.component.html',
  styleUrls: ['./cs-card-elemento-compra.component.css']
})
export class CsCardElementoCompraComponent implements OnInit {
  imagen = IMAGEN;
  @Input() producto_item;
  @Input() id_cliente;
  @Output() resolve = new EventEmitter(); 

  constructor(
  ) {}

  ngOnInit() {
  }

  ver() {
    console.log(this.producto_item);
  }
  agregar() {
    console.log('estamos en card')
    console.log(this.producto_item)
    console.log('cliente es: ', this.id_cliente);
    this.producto_item['id_cliente'] = this.id_cliente;
    this.producto_item['precio_venta'] = this.producto_item.precio;
    console.log(this.producto_item)
    this.cardEmitter();
  }  

  cardEmitter() {
    console.log('se devolvio '+ this.producto_item);
    this.resolve.emit(this.producto_item);
  }

}
