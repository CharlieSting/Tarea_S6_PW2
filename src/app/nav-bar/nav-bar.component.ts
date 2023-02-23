import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  title = 'Libreria Charles ';
  descripcion = 'Libreria donde podras encontrar libros de todo tipo geopolitica y archivos desclasificados de la CIA';
  ubicacion = 'Calle 123, Colonia 456, Ciudad 789';
}
