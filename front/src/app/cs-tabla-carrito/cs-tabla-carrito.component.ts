import { Component, OnInit, ViewChild, Input, DoCheck, OnChanges, Inject, EventEmitter, Output } from '@angular/core';
import { StorageHandlerService} from '../storage-handler.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RestService } from '../rest.service';
import {MatSnackBar} from '@angular/material';

export interface ProductoInfo {
  id_categoria: number,
  id_producto: number
  nombre_categoria: string,
  nombre_producto: string,
  precio: number
} 

@Component({
  selector: 'app-cs-tabla-carrito',
  templateUrl: './cs-tabla-carrito.component.html',
  styleUrls: ['./cs-tabla-carrito.component.css']
})
export class CsTablaCarritoComponent implements OnInit, OnChanges ,DoCheck{
  @Input() cambiado = '';
  @Input() total_ingreso = 0;
  @Input() total_items= 0;
  @Input() eventoTabComprar;
  @Output() resta_elemento = new EventEmitter();
  @Output() eventoCarrito = new EventEmitter();
  @Output() estado_compra = new EventEmitter();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  total: number = 0;
  aceptado : boolean;
  elemento_resta : number;
  lista_compras;
  compraEvento: object;

  displayedColumns: Array<string> = ['id_categoria', 'id_producto', 'nombre_categoria', 'nombre_producto', 'precio', 'id_categ']
  displayedFooterColumns: Array<string> = ['item', 'cost']
  dataSource: MatTableDataSource<ProductoInfo>;
  
  constructor(
    private storage: StorageHandlerService,
    public dialog: MatDialog,
    private restService: RestService,
    public snackBar: MatSnackBar
  ) {
    this.OnRefresh();
  }
  
  ngOnInit() {}

  ngOnChanges() {
    // console.log('se cambio');
    // console.log(this.eventoTabComprar)
    // console.log('comprar es lo siguete', this.total_ingreso)

    // this.evalTabResponse(this.eventoTabComprar);
    this.OnRefresh();
    // console.log('hola on changes');

    if(this.total_ingreso == 0) {
      // console.log('ingreso cero')
      // setTimeout(() => {
      //   this.openSnackBar('El total', "Es cero", 2000);
      // }, 250);
      // this.totalCero();
    }

  }
  
  ngDoCheck() {}

  OnRefresh() {
    let info_storage = this.storage.getOnLocalStorage();
    if (this.storage.isEmpty()) {
      this.dataSource = new MatTableDataSource(); 
    } else {
      this.dataSource = new MatTableDataSource(info_storage); 
      // this.getListNumbers(info_storage);
    }
  }

  evalTabResponse(event) {
    if(event.agregado) {

    }
  }

  compraEmitter(obj) {
    // console.log('emito un');
    // console.log(obj);
    // this.compraEvento = {
    //   'borrado': false,
    //   'comprado': false
    // }

    if (obj['borrado']) {
      console.log('hola estas en  borrado')
      // this.compraEvento['borrado'] = true;

    }

    
    if (obj['comprado']) {
      // this.compraEvento['comprado'] = true;
    }

    console.log('antes de emitir evento carrito');
    this.eventoCarrito.emit(obj);
    this.compraEvento = {
      'borrado': false,
      'comprado': false
    }
    // console.log('soy un evento luego de la accion'); 
  }

  delEmitter() {
    // console.log('se devolvio '+ this.producto_item);
    this.resta_elemento.emit(this.elemento_resta);
  }

  vaciarStorage() {    
    this.storage.deleteOnLocalStorage();
    this.OnRefresh();
    // this.compraEmitter();
    this.total_ingreso = 0;
    this.total_items = 0;
  }


  borrarItem(id) {
    // console.log('se borro');
    // console.log(id);
    let monto_eliminado = this.storage.getOnLocalStorage()[id];
    console.log(monto_eliminado.precio);
    // console.log(monto_eliminado);
    let obj = {
      'borrado': true,
      'id_borrado': id,
      'elemento_borrado': -1 * monto_eliminado.precio,
      'comprado': false
    }
    console.log('obj', obj)
    this.compraEmitter(obj);
    this.elemento_resta = monto_eliminado;
    // this.delEmitter();
    // this.storage.deleteOnLocalStorageById(id);
    // console.log('porque no apareces')
    this.OnRefresh();
  }
  
    /////////////////////////////////////////////////////////////////////////
   //////////////////      DIALOGO DE CONFIRMACION         /////////////////
  /////////////////////////////////////////////////////////////////////////
  openDialog(): void {
    const dialogRef = this.dialog.open(CsTablaCarritoDialogComponent, {
      width: '250px',
      data: {
        aceptado: this.aceptado
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == undefined) {
      } else {
        let lista_compras = this.storage.getOnLocalStorage();
        this.lista_compras = lista_compras
        let resultado = this.restService.agregarComprasCarrrito(this.lista_compras).subscribe(
          result => {
            // console.log('agregarComprasCarrrito funciono >>>>>'+result);
            // console.log(result);
            // // return result;
            this.openSnackBar('La compra', "Fue exitosa",3000);
          }, 
          error => {
            // console.log('error agregarComprasCarrrito>>'+error);
            // console.log(error);
            // return error
            this.openSnackBar('La compra', "Tuvo un fallo",3000);
          });

        this.vaciarStorage();
        this.OnRefresh();

      }
    });
  }

  openSnackBar(message: string, action: string, time: number) {
    this.snackBar.open(message, action, {
      duration: time,
    });
  }

}

@Component({
  selector: 'app-cs-tabla-carrito-dialog',
  templateUrl: './cs-tabla-carrito-dialog.component.html',
})
export class CsTablaCarritoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CsTablaCarritoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    ) {
      data.cambiado = true;
  }

  onNoClick(): void {
    console.log(this.data);
    this.dialogRef.close();
  } 
}