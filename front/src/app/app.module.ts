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
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule} from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { Clientes } from './clientes/clientes.component';
import { CsFormClientComponent,CsFormClientDialogComponent } from './cs-form-client/cs-form-client.component';
import { CsTableClientComponent } from './cs-table-client/cs-table-client.component';
import { CsFormVentaComponent, CsFormVentaDialogComponent } from './cs-form-venta/cs-form-venta.component';
import { CsTableVentasComponent } from './cs-table-ventas/cs-table-ventas.component';
import { CsFormCategoriaComponent, 
        CsFormCategoriaDialogComponent } from './cs-form-categoria/cs-form-categoria.component';
import { CsFormProductoComponent, 
        CsFormProductoDialogComponent } from './cs-form-producto/cs-form-producto.component';
import { CsTableCategoriaComponent } from './cs-table-categoria/cs-table-categoria.component';
import { CsTableProductoComponent } from './cs-table-producto/cs-table-producto.component';
import { CsTableUpdateProductoComponent } from './cs-table-update-producto/cs-table-update-producto.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CsTabComprarComponent } from './cs-tab-comprar/cs-tab-comprar.component';
import { CsMainTabComponent } from './cs-main-tab/cs-main-tab.component';
import { CsCardElementoCompraComponent } from './cs-card-elemento-compra/cs-card-elemento-compra.component'

@NgModule({
  declarations: [
    AppComponent,
    Clientes,
    CsFormClientComponent,
    CsFormClientDialogComponent,
    CsTableClientComponent,
    CsFormVentaComponent,
    CsFormVentaDialogComponent,
    CsTableVentasComponent,
    CsFormCategoriaComponent,
    CsFormCategoriaDialogComponent,
    CsFormProductoComponent,
    CsFormProductoDialogComponent,
    CsTableCategoriaComponent,
    CsTableProductoComponent,
    CsTableUpdateProductoComponent,
    CsTabComprarComponent,
    CsMainTabComponent,
    CsCardElementoCompraComponent,
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
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatSelectModule,
    MatTabsModule,
    MatCardModule
    // MatMomentDateModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    // MatNativeDateModule, 
    // MatMomentDateModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  entryComponents: [
    CsFormCategoriaComponent, CsFormCategoriaDialogComponent,
    CsFormClientComponent, CsFormClientDialogComponent,
    CsFormProductoComponent, CsFormProductoDialogComponent,
    CsFormVentaDialogComponent, CsFormVentaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// export class PizzaPartyAppModule { }