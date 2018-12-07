import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private _service:RestService
  ) {}
  
  informacion;

  ngOnInit(): void {
    // this.informacion = this._service.getMostrarClienteDB();

  }
  title = 'mini carrito de compras app';
}
