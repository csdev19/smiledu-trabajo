import { Component, OnInit, Inject } from '@angular/core';
import { RestService } from '../rest.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface CategoriaElemento {
  nombre_categoria: string;
}

@Component({
  selector: 'app-cs-form-categoria',
  templateUrl: './cs-form-categoria.component.html',
  styleUrls: ['./cs-form-categoria.component.css']
})
export class CsFormCategoriaComponent implements OnInit {
  categoria_nueva : CategoriaElemento;
  msj = 'Mostrar Formulario de Categorias';
  nombre_categoria: string;

  constructor(
    private restService: RestService, 
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CsFormCategoriaDialogComponent, {
      width: '500px',
      data: {nombre_categoria: this.nombre_categoria}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      let obj = {
        'nombre_categoria': result
      }
      console.log(obj);
      // this.nombre_categoria = result;
      this.restService.agregarCategoria(obj)
        .subscribe( 
          res => console.log('hola'),
          err => console.log('das'));
    });
  }


  setCategoria(nombre_categoria: string): void {
    this.categoria_nueva = {
      nombre_categoria : nombre_categoria
    };
  }  
  
  crearCategoria(): boolean{
    // console.log(this.categoria_nueva);
    
    this.restService.agregarCategoria(this.categoria_nueva)
      .subscribe(result => 'work',error => 'not work')
    this.categoria_nueva = null;
    return false;
  }
}

@Component({
  selector: 'app-cs-form-categoria-dialog',
  templateUrl: 'cs-form-categoria-dialog.component.html',
})
export class CsFormCategoriaDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CsFormCategoriaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CategoriaElemento) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}