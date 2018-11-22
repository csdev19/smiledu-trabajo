import { Component } from '@angular/core';

interface Persona {
    nombre: string,
    apellido: string,
    edad: number,
    correo: string
}

@Component({
    selector: 'clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.css']
})
export class Clientes {     
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

    
}