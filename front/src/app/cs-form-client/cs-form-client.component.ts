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
    public dialog: MatDialog, 
    public snackBar: MatSnackBar
  ) {}
  
  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CsFormClientDialogComponent, {
      width: '400px',
      data: {
        exito: false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result.exito) {
        this.openSnackBar('Cliente', 'Fue ingresado exitosamente');
      } else {
        this.openSnackBar('Cliente', 'No fue creado exitosamente');
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}



@Component({
  selector: 'app-cs-form-client-dialog',
  templateUrl: './cs-form-client-dialog.component.html',
  styleUrls: ['./cs-form-client-dialog.component.css']
})
export class CsFormClientDialogComponent {
  
  clienteForm = this.fb.group ({
    'nombres': ['', Validators.required],
    'apellidos': ['', Validators.required],
    'correo': ['', Validators.email],
    'direccion': ['', Validators.required],
    'to_char': [new Date(), Validators.required]
  })

  constructor(
    private restService: RestService, 
    public dialogRef: MatDialogRef<CsFormClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClienteElemento,
    private fb: FormBuilder
  ) {}

    get nombres() { return this.clienteForm.get('nombres'); }
    get apellidos() { return this.clienteForm.get('apellidos'); }
    get correo() { return this.clienteForm.get('correo'); }
    get direccion() { return this.clienteForm.get('direccion'); }
    get to_char() { return this.clienteForm.get('to_char'); }
  

  onNoClick(): void {
    this.dialogRef.close();
  }


  setClient() {
    // seteamos los datos con el formato necesario
    // en este caso solo seteamos la fecha
    let datos = this.clienteForm.value;
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    this.clienteForm.value.to_char = datos.to_char.toLocaleDateString("en-En", options);;
  }
  
  
  crearCliente() {
    console.log(this.nombres.errors);
    this.setClient();
    this.restService.agregarCliente(this.clienteForm.value).subscribe(
        result => {
          // console.log(' hola esto funciono ');

          if(result) {
            console.log(result);
            // this.openSnackBar('Cliente', 'Fue ingresado exitosamente');
          } else {
            // this.openSnackBar('Cliente', 'Hubo un error');
          }
        }, error => {
          console.log(error)
        });
  }

  getErrorEmpty() {
    return 'No puede estar vacio';
  }
  getErrorEmail() {
    return 'Debe ser un correo valido';
  }
  
  getErrorFecha() {
    return 'Debe ser una fecha valida con formato dd/mm/yyyy';
  }

  getErrorNombre() {
    return 'Debes ingresar un nombre ';
  }
}
