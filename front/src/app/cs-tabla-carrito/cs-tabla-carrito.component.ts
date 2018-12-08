import { Component, OnInit, ViewChild, Input, DoCheck, OnChanges, Inject } from '@angular/core';
import { StorageHandlerService} from '../storage-handler.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RestService } from '../rest.service';


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

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  total: number = 0;
  aceptado : boolean;
  lista_compras;
  
  displayedColumns: Array<string> = ['id_categoria', 'id_producto', 'nombre_categoria', 'nombre_producto', 'precio', 'id_categ']
  displayedFooterColumns: Array<string> = ['item', 'cost']
  dataSource: MatTableDataSource<ProductoInfo>;
  
  constructor(
    private storage: StorageHandlerService,
    public dialog: MatDialog,
    private restService: RestService,
  ) {
    this.OnRefresh();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CsTablaCarritoDialogComponent, {
      width: '250px',
      data: {
        aceptado: this.aceptado
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result == undefined) {
        console.log('no acepto');
      } else {
        let lista_compras = this.storage.getOnLocalStorage();
        console.log(lista_compras);
        this.lista_compras = lista_compras
        this.restService.agregarComprasCarrrito(this.lista_compras).subscribe(
          result => {
            // console.log(result);
            return 'work';
          }, 
          error => {
            // console.log(error);
          }
          );
        // console.log(this.storage.getOnLocalStorage())
        this.vaciarStorage();
        // this.storage.deleteOnLocalStorage();
        this.OnRefresh();
      }
    });
  }


  
  ngOnInit() {
    console.log('esto se inicio ');
    console.log(this.cambiado);
    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    this.OnRefresh();
  }
  
  ngDoCheck() {}

  OnRefresh() {
    let info_storage = this.storage.getOnLocalStorage();
    if (this.storage.isEmpty()) {
      this.dataSource = new MatTableDataSource(); 
    } else {
      this.dataSource = new MatTableDataSource(info_storage); 
      this.getListNumbers(info_storage);
    }
  }


  getListNumbers(lista) {
    let valores_monedas = lista.map( (value) => {
      let money = value.precio;
      let precio = money.slice(0, money.length  - 1 );
      if (money.search('.') != -1) {
        precio = precio.replace(".","")
      }
      if (money.search(',') != -1) {
          precio = precio.replace(",",".")
      }
      return parseFloat(precio);
    })
    
    // console.log(valores_monedas);
    this.total = valores_monedas.reduce( (acum, value) => {
      return acum + value
    }, 0);
  }

  borrarItem(id) {
    // console.log('se borro');
    this.storage.deleteOnLocalStorageById(id);
    // console.log('porque no apareces')
    this.OnRefresh();
  }
  
  vaciarStorage() {    
    this.storage.deleteOnLocalStorage();
    this.total = 0;
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



