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
    clientes2: Array<Object>;
    clientes3;
    cliente: Object;
    productos: Array<Object>;
    categorias:any = [];
    
    clientes: Persona[] = [
        {
            'nombre': 'Cristian',
            'apellido': 'sotomayor',
            'edad': 19,
            'correo': 'cristian@gmail.com'
        },
        {
            'nombre': 'Maribel',
            'apellido': 'gonzales',
            'edad': 50,
            'correo': 'mari@gmail.com'
        },
        {
            'nombre': 'Luis',
            'apellido': 'sotomayor',
            'edad': 45,
            'correo': 'luis@gmail.com'
        },
        {
            'nombre': 'diego',
            'apellido': 'sotomayor',
            'edad': 15,
            'correo': 'diego@gmail.com'
        },
        {
            'nombre': 'allison',
            'apellido': 'velasquez',
            'edad': 20,
            'correo': 'allison@gmail.com'
        }
    ]

    constructor (private restService: RestService) {
        
        // this.restService.getMostrarCliente()
        //     .subscribe(clientes2 => {
        //         console.log(clientes2);
        //         console.log(typeof clientes2);
        //         this.clientes2 = clientes2;
        //     });
        
        
        this.restService.getMostrarCategoriaDB()
            .subscribe(categorias => {
                this.categorias = categorias;
            });
        
                // this.restService.getMostrarClienteDB()
        //     .subscribe(clientes3 => {
        //         console.log(typeof clientes3);
        //         console.log(clientes3);
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

        console.log(cliente);

        this.restService.agregarCliente(cliente).subscribe(
            result => {
                console.log(result);
            }, 
            error => {
                console.log(error);
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

    eliminarCliente(cliente) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (cliente['nombre'] == this.clientes[i]['nombre']) {
                this.clientes.splice(i, 1);
                break;
            }           
        }
    }

}