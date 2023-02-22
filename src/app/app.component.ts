import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Libreria Charles';
  descripcion = 'Libreria donde podras encontrar libros de todo tipo';
  ubicacion = 'Calle 123, Colonia 456, Ciudad 789';
  imagenLibros= 'https://cdn.culturagenial.com/es/imagenes/novela-1984-de-george-orwell-og.jpg';
  libro = libro1
}

export interface Ilibro{
  titulo: string;
  descripcion: string;
  imagen: string;
  editorial: string;
}

export class Libro implements Ilibro{
  titulo: string;
  descripcion: string;
  imagen: string;
  editorial: string;
  constructor(titulo: string, descripcion: string, imagen: string, editorial: string){
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.editorial = editorial;
  }
}

// crear libros
let libro1 = new Libro('1984', 'Novela de ciencia ficción', 'https://cdn.culturagenial.com/es/imagenes/novela-1984-de-george-orwell-og.jpg', 'Editorial 1');



