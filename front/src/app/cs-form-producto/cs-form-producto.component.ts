import { Component, OnInit, Inject } from '@angular/core';
import { RestService } from "../rest.service"; 
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

export interface ProductoElemento {
  id_producto: number,
  nombre_producto: string,
  precio: number,
  id_categoria:	number
}



@Component({
  selector: 'app-cs-form-producto',
  templateUrl: './cs-form-producto.component.html',
  styleUrls: ['./cs-form-producto.component.css']
})
export class CsFormProductoComponent implements OnInit {
  msj: string = 'Mostrar Formulario de Productos';
  categorias;

  id_producto: number = 0;
  nombre_producto: string;
  precio: number;
  id_categoria: number = 0;

  producto_nuevo: ProductoElemento;
  

  constructor(private restService: RestService, public dialog: MatDialog) {
    
    this.restService.getMostrarCategoriaDB()
      .subscribe(categorias => {
        this.categorias = categorias;
      });


  }


  ngOnInit() {
  }

  
  openDialog(): void {
    const dialogRef = this.dialog.open(CsFormProductoDialogComponent, {
      width: '800px',
      data: {
        id_producto: this.id_producto,
        nombre_producto: this.nombre_producto,
        precio: this.precio,
        id_categoria:	this.id_categoria
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      // this.nombre_categoria = result;
      this.producto_nuevo = result;
      
    });
  }




  crearProducto() {
    console.log(this.producto_nuevo);
    
    this.restService.agregarProducto(this.producto_nuevo).subscribe(
      result => {
        // console.log(result);
        return 'work';
      }, 
      error => {
        // console.log(error);
      }
      )
    this.producto_nuevo = null;

    return false;
  }


}

@Component({
  selector: 'app-cs-form-producto-dialog',
  templateUrl: './cs-form-producto-dialog.component.html',
})
export class CsFormProductoDialogComponent {
  categorias;
  categoria_id;

  id_categoria;
  

  constructor(
    private restService: RestService, public dialogRef: MatDialogRef<CsFormProductoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductoElemento) {
      this.restService.getMostrarCategoriaDB()
      .subscribe(categorias => {
        this.categorias = categorias;
      });

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setProduct () {
    this.data.id_categoria = this.categoria_id;
  }


}
