import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-cs-form-categoria',
  templateUrl: './cs-form-categoria.component.html',
  styleUrls: ['./cs-form-categoria.component.css']
})
export class CsFormCategoriaComponent implements OnInit {

  msj = 'Mostrar Formulario de Categorias';
  seeForm = false;
  nombre_categoria;

  constructor(private restService: RestService) { }

  ngOnInit() {
  }


  isVisible () {
    this.seeForm = !this.seeForm;
    this.msj = this.seeForm ? 'Ocultar Formulario de Categoria' : 'Mostrar Formulario de Categoria';
  }

  crearCategoria() {
    // console.log(this.id_cliente)
    // console.log(this.id_producto)
    // console.log(this.precio)



    let categoria = {
        'nombre_categoria': this.nombre_categoria,
    };


    console.log(categoria);
    
    this.restService.agregarCategoria(categoria).subscribe(
      result => {
        // console.log(result);
        return 'work';
      }, 
      error => {
        // console.log(error);
      }
      )
    return false;
  }


}
