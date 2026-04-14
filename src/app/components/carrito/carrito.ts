import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarritoService, ItemCarrito } from '../../services/carrito';
import { Producto } from '../../data/productos';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, FormsModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss'
})
export class CarritoComponent implements OnInit {
  @Input() abierto = false;
  @Output() cerrado = new EventEmitter<void>();

  items: ItemCarrito[] = [];
  nombre = '';
  telefono = '';
  ciudad = '';
  direccion = '';
  notas = '';
  mostrarError = false;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.items$.subscribe(items => {
      this.items = items;
    });
  }

  get total() {
    return this.carritoService.total;
  }

  agregar(producto: Producto) {
    this.carritoService.agregar(producto);
  }

  quitar(id: number) {
    this.carritoService.quitar(id);
  }

  eliminar(id: number) {
    const actual = this.items.filter(i => i.producto.id !== id);
    this.carritoService.limpiar();
    actual.forEach(i => {
      for (let j = 0; j < i.cantidad; j++) {
        this.carritoService.agregar(i.producto);
      }
    });
  }

  cerrar() {
    this.cerrado.emit();
  }

  cerrarFuera(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('overlay')) {
      this.cerrar();
    }
  }

  enviarWhatsApp() {
    if (!this.nombre || !this.telefono || !this.ciudad || !this.direccion) {
      this.mostrarError = true;
      return;
    }
    this.mostrarError = false;

    let mensaje = '✨ *NUEVO PEDIDO - Oro Sacro Joyería* ✨\n\n';
    mensaje += '🛍️ *Productos:*\n';
    this.items.forEach(item => {
      mensaje += `• ${item.producto.nombre} x${item.cantidad}\n`;
    });
    mensaje += `\n💰 *Total: $${this.total.toLocaleString('es-CO')}*\n\n`;
    mensaje += '📦 *Datos de envío:*\n';
    mensaje += `• Nombre: ${this.nombre}\n`;
    mensaje += `• Teléfono: ${this.telefono}\n`;
    mensaje += `• Ciudad: ${this.ciudad}\n`;
    mensaje += `• Dirección: ${this.direccion}\n`;
    if (this.notas) mensaje += `• Notas: ${this.notas}\n`;
    mensaje += '\n¡Gracias por tu compra! 🙏';

    const url = `https://wa.me/573207712913?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
}
