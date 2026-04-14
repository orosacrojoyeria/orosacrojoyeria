import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { CatalogoComponent } from './components/catalogo/catalogo';
import { CarritoComponent } from './components/carrito/carrito';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CatalogoComponent, CarritoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  carritoAbierto = false;

  abrirCarrito() {
    this.carritoAbierto = true;
  }

  cerrarCarrito() {
    this.carritoAbierto = false;
  }
}
