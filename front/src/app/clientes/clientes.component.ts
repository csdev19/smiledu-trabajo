import { Component } from '@angular/core';
import { RestService } from '../rest.service';
//import { Observable } from 'rxjs/Observable';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { providerDef } from '@angular/core/src/view';
//import 'rxjs/add/operator/map';

interface Persona {
    nombre: string,
    apellido: string,
    edad: number,
    correo: string
}

@Component({
    selector: 'clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.css'],
    providers: [RestService]
})
export class Clientes {     
    clientes3;
    cliente: Object;
    productos;
    categorias:any = [];
    client_titles: Array<string> = ['id','Nombre','Apellidos','Correo','Fecha de nacimiento','Eliminar']; 
    product_titles: Array<string> = ['Nombre Producto','Fecha Compra','Precio'];

    constructor (private restService: RestService) {
        
        
        // this.restService.getMostrarCategoriaDB()
        //     .subscribe(categorias => {
        //         this.categorias = categorias;
        //     });
        
        // this.restService.getMostrarClienteDB()
        //     .subscribe(clientes3 => {
        //         this.clientes3 = clientes3;
        //     });
            
        // this.restService.getMostrarProducto()
        //     .subscribe(productos => {
        //         console.log(productos);
        //         this.productos = productos;
        //     });
    }

    
    obtenerCliente() {

    }

    agregarCliente(nombre, apellido, edad, correo) {
        let cliente = {
            'nombre': nombre.value,
            'apellido': apellido.value,
            'edad': edad.value,
            'correo': correo.value
        };

        // console.log(cliente);

        this.restService.agregarCliente(cliente).subscribe(
            result => {
                // console.log(result);
            }, 
            error => {
                // console.log(error);
            }
        )
        //     .subscribe(clientes => {
        //         console.log(typeof cliente);
        //         console.log(cliente);
        //         this.cliente = cliente;
        //     });
        // console.log(cliente);
        nombre.value = '';
        apellido.value = '';
        edad.value = '';
        correo.value = '';
        return false;
    }

    // eliminarCliente(cliente) {
    //     for (let i = 0; i < this.clientes.length; i++) {
    //         if (cliente['nombre'] == this.clientes[i]['nombre']) {
    //             this.clientes.splice(i, 1);
    //             break;
    //         }           
    //     }
    // }

}