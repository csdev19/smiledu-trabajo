// 
import { Component, OnInit, Inject } from '@angular/core';
import { RestService } from "../rest.service"; 
import { FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

// ANGULAR MATERIAL IMPORTS
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


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

  // Para el boton
  msj: string = 'Mostrar formulario de cliente';
  seeForm: boolean = false;
  cliente_nuevo: ClienteElemento;

  
  nombres;
  apellidos;
  to_char;
  correo;
  direccion;
  
  constructor(
    private restService: RestService, 
    public dialog: MatDialog, 
    public snackBar: MatSnackBar
  ) {}
  
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

    dialogRef.disableClose = true;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
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


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  crearCliente() {

    console.log(this.cliente_nuevo);


    this.restService.agregarCliente(this.cliente_nuevo).subscribe(
        result => {
          console.log(' hola esto funciono ');

          if(result) {
            console.log(result);
            // this.openSnackBar('Cliente', 'Fue ingresado exitosamente');
          } else {
            // this.openSnackBar('Cliente', 'Hubo un error');
          }
        }, 
        error => {
            console.log(error);
        }
    );
    this.openSnackBar('Cliente', 'Fue ingresado exitosamente');

    // console.log('aqui ya funciona')
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
  // nombres = new FormControl('');
  // correo = new FormControl('');
  // apellidos = new FormControl('');
  // direccion = new FormControl('');

  clienteForm = this.fb.group ({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    correo: ['', Validators.required],
    direccion: ['', Validators.required],
    date: [new Date()]
  })

  constructor(
    public dialogRef: MatDialogRef<CsFormClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClienteElemento,
    private fb: FormBuilder
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  setClient() {
    // console.log(this.data);
    // const fecha = this.date.value;
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    // this.data.nombres = this.nombres.value;
    // this.data.apellidos = this.apellidos.value;
    // this.data.correo = this.correo.value;
    // this.data.direccion = this.direccion.value;
    let datos = this.clienteForm.value;
    // console.log(datos.date)
    // datos.date.toLocaleDateString("en-En", options);
    this.data.nombres = datos.nombres;
    this.data.apellidos = datos.apellidos;
    this.data.to_char = datos.date.toLocaleDateString("en-En", options);;
    this.data.direccion = datos.direccion;
    this.data.correo = datos.correo;
    // console.log(this.clienteForm.value);
    console.log(this.data);
  }
}
