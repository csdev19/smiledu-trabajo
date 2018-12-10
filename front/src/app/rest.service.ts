import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
//import { Observable, of } from "rxjs";
//import { map, catchError, tap } from "rxjs/operators";
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url= 'http://localhost:8081/';
  constructor(private http: HttpClient) {

  }

//////////////    MOSTRAR 

  getMostrarClienteDB():Observable<any> {
    // console.log(this.url+'ver-clientes')
    return this.http.get(this.url+'clientes/ver-clientes').pipe(map(res => res));
  }

  
  getMostrarCategoriaDB():Observable<any> {
    // console.log(this.url+'ver-categorias')
    return this.http.get(this.url+'categories/ver-categorias').pipe(map(res => res));
  }

  getMostrarProductoDB():Observable<any> {
    // console.log(this.url+'products/ver-productos')
    return this.http.get(this.url+'products/ver-productos').pipe(map(res => res));
  }
 
  getMostrarProductoTablaDB():Observable<any> {
    // console.log(this.url+'ver-productos-tabla')
    return this.http.get(this.url+'products/ver-productos-tabla').pipe(map(res => res));
  }
  getMostrarVentasDB():Observable<any> {
    // console.log(this.url+'ver-ventas')
    return this.http.get(this.url+'sales/ver-ventas').pipe(map(res => res));
  }

///////////////     AGREGAR

  agregarCliente(nuevoCliente): Observable<any> {
    return this.http.post(`${this.url}clientes/agregar-clientes`, nuevoCliente, httpOptions)
  }


  agregarProducto(nuevoCliente): Observable<any> {
    return this.http.post(`${this.url}products/agregar-producto`, nuevoCliente, httpOptions)
  }


  agregarCategoria(nuevoCliente): Observable<any> {
    return this.http.post(`${this.url}categories/agregar-categoria`, nuevoCliente, httpOptions)
  }
  
  crearVenta(nuevaVenta): Observable<any> {
    // console.log("llamaste a la api venta");
    return this.http.post(`${this.url}sales/crear-venta`, nuevaVenta, httpOptions)
  }
  
  agregarComprasCarrrito(lista_venta): Observable<any> {
    console.log('estas en el rest');
    console.log(lista_venta);
    return this.http.post(`${this.url}sales/venta-carrito`, lista_venta, httpOptions)
  }

/////////////////     ACTUALIZAR
actualizarProducto(obj): Observable<any> {
  // console.log("llamaste a la api");
  return this.http.put(`${this.url}products/actualizar-producto`, obj, httpOptions)
}




/////////////////     ELIMINAR
eliminarCliente(id) {
  return this.http.delete(`${this.url}products/eliminar-producto/${id}`,httpOptions)
    .pipe(map(res => res));
}

  // actualizarCliente(nuevoCliente) {
  //   return this.http.put(`${this.url}/api/tasks/${nuevoCliente._id}`, nuevoCliente)
  //     .pipe(map(res => res));
  // }

}




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
