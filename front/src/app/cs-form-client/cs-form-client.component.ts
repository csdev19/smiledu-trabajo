import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RestService } from "../rest.service"; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cs-form-client',
  templateUrl: './cs-form-client.component.html',
  styleUrls: ['./cs-form-client.component.css']
})
export class CsFormClientComponent implements OnInit, MatInputModule {
  categoria: string = '';
  @ViewChild('categoria_producto') categoria_producto;
  @ViewChild('edad') edad;
  categorias;
  msj: string = 'Mostrar formulario de cliente';
  seeForm: boolean = false;
  constructor(private restService: RestService) { 
    
    this.restService.getMostrarCategoriaDB()
      .subscribe(categorias => {
        this.categorias = categorias;
      });
    
  }
  
  ngOnInit() {
  }

  isVisible () {
    this.seeForm = !this.seeForm;
    this.msj = this.seeForm ? 'Ocultar Formulario Cliente' : 'Mostrar Formulario Cliente';
  }

  printMsj() {
    console.log('clickeado');
  }

  setCategorie(cat) {
    this.categoria = cat;
  }

  agregarCliente(nombre, apellido, edad, correo,categoria) {
    let cliente = {
        'nombre': nombre.value,
        'apellido': apellido.value,
        'edad': edad.value,
        'correo': correo.value,
        'categoria': this.categoria_producto.nativeElement.value
    };


    // console.log(cliente);
    return false;

    this.restService.agregarCliente(cliente).subscribe(
        result => {
            console.log('work');
        }, 
        error => {
            console.log(error);
        }
    )
    //     .subscribe(clientes => {
    //         console.log(typeof cliente);
    //         console.log(cliente);
    //         this.cliente = cliente;
    //     });
    // console.log(cliente);
    nombre.value = '';
    apellido.value = '';
    edad.value = '';
    correo.value = '';
    return false;
  }

}
