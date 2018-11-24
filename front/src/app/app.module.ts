import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Clientes } from './clientes/clientes.component';
import { CsFormClientComponent } from './cs-form-client/cs-form-client.component';
import { CsTableClientComponent } from './cs-table-client/cs-table-client.component';
import { CsFormVentaComponent } from './cs-form-venta/cs-form-venta.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CsTableVentasComponent } from './cs-table-ventas/cs-table-ventas.component';
import { CsFormCategoriaComponent } from './cs-form-categoria/cs-form-categoria.component';
import { CsFormProductoComponent } from './cs-form-producto/cs-form-producto.component';
import { CsTableCategoriaComponent } from './cs-table-categoria/cs-table-categoria.component';
import { CsTableProductoComponent } from './cs-table-producto/cs-table-producto.component';
import { CsTableUpdateProductoComponent } from './cs-table-update-producto/cs-table-update-producto.component'

@NgModule({
  declarations: [
    AppComponent,
    Clientes,
    CsFormClientComponent,
    CsTableClientComponent,
    CsFormVentaComponent,
    CsTableVentasComponent,
    CsFormCategoriaComponent,
    CsFormProductoComponent,
    CsTableCategoriaComponent,
    CsTableProductoComponent,
    CsTableUpdateProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
