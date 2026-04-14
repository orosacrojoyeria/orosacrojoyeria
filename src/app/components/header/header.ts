import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent implements OnInit {
  @Output() carritoAbierto = new EventEmitter<void>();
  cantidadItems = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.items$.subscribe(() => {
      this.cantidadItems = this.carritoService.cantidad;
    });
  }

  abrirCarrito() {
    this.carritoAbierto.emit();
  }
}
