import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule,
          MatCheckboxModule,
          MatToolbarModule,
          MatSidenavModule,
          MatIconModule,MatListModule
} from "@angular/material";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

import { Clientes } from './clientes/clientes.component';
import { CsFormClientComponent } from './cs-form-client/cs-form-client.component';
import { CsTableClientComponent } from './cs-table-client/cs-table-client.component';
import { CsFormVentaComponent } from './cs-form-venta/cs-form-venta.component';
import { CsTableVentasComponent } from './cs-table-ventas/cs-table-ventas.component';
import { CsFormCategoriaComponent } from './cs-form-categoria/cs-form-categoria.component';
import { CsFormProductoComponent } from './cs-form-producto/cs-form-producto.component';
import { CsTableCategoriaComponent } from './cs-table-categoria/cs-table-categoria.component';
import { CsTableProductoComponent } from './cs-table-producto/cs-table-producto.component';
import { CsTableUpdateProductoComponent } from './cs-table-update-producto/cs-table-update-producto.component';
import { ExampleNavbarComponent } from './example-navbar/example-navbar.component';
import { LayoutModule } from '@angular/cdk/layout'

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
    CsTableUpdateProductoComponent,
    ExampleNavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule, 
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatTableModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatTableModule
  ],
  providers: [
    // {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// export class PizzaPartyAppModule { }