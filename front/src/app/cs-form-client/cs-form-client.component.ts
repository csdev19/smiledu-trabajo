import { Component, OnInit, Inject } from '@angular/core';
import { RestService } from "../rest.service"; 
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormControl} from '@angular/forms';

export interface ClienteElemento {
  nombres: string,
  apellidos: string,
  to_char: string,
  correo:	string,
  direccion: string,
}


@Component({
  selector: 'app-cs-form-client',
  templateUrl: './cs-form-client.component.html',
  styleUrls: ['./cs-form-client.component.css']
})
export class CsFormClientComponent implements OnInit, MatInputModule {
  // categoria: string = '';
  // @ViewChild('categoria_producto') categoria_producto;
  // @ViewChild('edad') edad;
  // categorias;
  msj: string = 'Mostrar formulario de cliente';
  seeForm: boolean = false;
  cliente_nuevo: ClienteElemento;
  // date = new FormControl(new Date());
  
  nombres;
  apellidos;
  to_char;
  correo;
  direccion;
  
  constructor(private restService: RestService, public dialog: MatDialog) {}
  
  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CsFormClientDialogComponent, {
      width: '800px',
      data: {
        nombres: this.nombres,
        apellidos: this.apellidos,
        to_char: this.to_char,
        correo:	this.correo,
        direccion: this.direccion,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      // this.nombre_categoria = result;
      this.setCliente(result)
    });
  }

  setCliente(result: any): any {
    this.cliente_nuevo = {
      nombres: result.nombres,
      apellidos: result.apellidos,
      to_char: result.to_char,
      correo:	result.correo,
      direccion: result.direccion
    }

    console.log(this.cliente_nuevo);
  }


  crearCliente() {
    // let cliente = {
    //     'nombre': nombre.value,
    //     'apellido': apellido.value,
    //     'edad': edad.value,
    //     'correo': correo.value,
    //     'categoria': this.categoria_producto.nativeElement.value
    // };


    console.log(this.cliente_nuevo);

    this.restService.agregarCliente(this.cliente_nuevo).subscribe(
        result => {
            console.log('work');
        }, 
        error => {
            console.log(error);
        }
    );

    // nombre.value = '';
    // apellido.value = '';
    // edad.value = '';
    // correo.value = '';
    this.cliente_nuevo = null;
    return false;
  }
  

}



@Component({
  selector: 'app-cs-form-client-dialog',
  templateUrl: './cs-form-client-dialog.component.html',
})
export class CsFormClientDialogComponent {
  date = new FormControl(new Date());

  constructor(
    public dialogRef: MatDialogRef<CsFormClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClienteElemento) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  setClient() {
    const fecha = this.date.value;
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    this.data.to_char = fecha.toLocaleDateString("en-En", options);
  }
}
