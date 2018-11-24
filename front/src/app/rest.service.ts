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

  
  // getMostrarCliente() {
  //   console.log(this.url+'mostrar-cliente')
  //   return this.http.get(this.url+'mostrar-cliente').pipe(map(res => res));
  // }

  
  getMostrarClienteDB():Observable<any> {
    console.log(this.url+'ver-clientes')
    return this.http.get(this.url+'ver-clientes').pipe(map(res => res));
  }

  
  getMostrarCategoriaDB():Observable<any> {
    console.log(this.url+'ver-categorias')
    return this.http.get(this.url+'ver-categorias').pipe(map(res => res));
  }

  getMostrarProductoDB():Observable<any> {
    console.log(this.url+'ver-productos')
    return this.http.get(this.url+'ver-productos').pipe(map(res => res));
  }

  getMostrarVentasDB():Observable<any> {
    console.log(this.url+'ver-ventas')
    return this.http.get(this.url+'ver-ventas').pipe (map(res => res));
  }

  // AGREGAR

  // agregarCliente(nuevoCliente) {
  //   return this.http.post(`${this.url}/agregar-cliente`, nuevoCliente)
  //     .pipe(map(res => res));
  // }

  agregarCliente(nuevoCliente): Observable<any> {
    console.log("llamaste a la api");
    return this.http.post(`${this.url}agregar-cliente`, nuevoCliente, httpOptions)
      // .pipe(map(res => {
      //   console.log('entre');
      //   return res;
      // }));
  }
  eliminarCliente(id) {
    return this.http.delete(`${this.url}/api/tasks/${id}`)
      .pipe(map(res => res));
  }

  // actualizarCliente(nuevoCliente) {
  //   return this.http.put(`${this.url}/api/tasks/${nuevoCliente._id}`, nuevoCliente)
  //     .pipe(map(res => res));
  // }
  
  crearVenta(venta): Observable<any> {
    console.log("llamaste a la api venta");
    return this.http.post(`${this.url}crear-venta`, venta, httpOptions)
  }

  

  
}




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


  // getMostrarCliente() {
  //   console.log(this.url+'mostrar-cliente')
  //   this.http.get(this.url+'mostrar-cliente').subscribe(row=> {
  //     console.log(row);
  //   },err => {
  //     console.log(err);
  //   })
  // }