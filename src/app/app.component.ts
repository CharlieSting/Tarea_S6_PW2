import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Libreria Charles ';
  descripcion = 'Libreria donde podras encontrar libros de todo tipo geopolitica y archivos desclasificados de la CIA';
  ubicacion = 'Calle 123, Colonia 456, Ciudad 789';
  imagenLibros= 'https://preview.redd.it/explanation-for-why-many-chinese-dont-like-ukraine-v0-vafoch8uyfk81.jpg?width=640&crop=smart&auto=webp&s=7d37cdbdc6adef068f23150c0237ca068b60c60e';
  libro = libro1;
    
}

export interface Ilibro{
  titulo: string;
  descripcion: string;
  imagen: string;
  editorial: string;
  precio : number;
  autor: string;
}

export class Libro implements Ilibro{
  titulo: string;
  descripcion: string;
  imagen: string;
  editorial: string;
  precio : number;
  autor: string;
  constructor(titulo: string, descripcion: string, imagen: string, editorial: string, precio: number, autor: string){
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.editorial = editorial;
    this.precio = precio;
    this.autor = autor;
  }
  
}

// crear libros
let libro1 = new Libro('1984', 'Novela de ciencia ficción y un mundo distopico', 'https://m.media-amazon.com/images/I/51pAui14H6L._SX326_BO1,204,203,200_.jpg', 'Editorial 1', 450, 'George Orwell');



