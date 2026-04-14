import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { PRODUCTOS, Producto } from '../../data/productos';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss'
})
export class CatalogoComponent implements OnInit {
  productos: Producto[] = PRODUCTOS;
  productosFiltrados: Producto[] = [];
  filtroActual = 'todos';

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.productosFiltrados = this.productos;
  }

  filtrar(categoria: string) {
    this.filtroActual = categoria;
    this.productosFiltrados = categoria === 'todos'
      ? this.productos
      : this.productos.filter(p => p.categoria === categoria);
  }

  agregar(producto: Producto) {
    this.carritoService.agregar(producto);
  }
}
