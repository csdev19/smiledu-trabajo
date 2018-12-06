import { Component, OnInit, Input } from '@angular/core';


const IMAGEN = 'http://www.cartonfast.com/wp-content/uploads/2016/06/caja_de_carton_cartonfast_americana-750x750.jpg';



@Component({
  selector: 'app-cs-card-elemento-compra',
  templateUrl: './cs-card-elemento-compra.component.html',
  styleUrls: ['./cs-card-elemento-compra.component.css']
})
export class CsCardElementoCompraComponent implements OnInit {
  imagen = IMAGEN;
  @Input() producto_item;


  constructor() {}

  ngOnInit() {
  }

  ver() {
    console.log(this.producto_item);
  }
  
}
