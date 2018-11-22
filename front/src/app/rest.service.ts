import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url= 'http://localhost:8081/';
  constructor(private http: HttpClient) {

  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getMostrarCliente() {
    console.log(this.url+'mostrar-cliente')
    this.http.get(this.url+'mostrar-cliente').subscribe(row=> {
      console.log(row);
    },err => {
      console.log(err);
    })
  }
}

const endpoint = 'http://localhost:3000/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};