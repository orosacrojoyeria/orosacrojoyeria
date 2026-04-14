import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../data/productos';

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private items = new BehaviorSubject<ItemCarrito[]>([]);
  items$ = this.items.asObservable();

  agregar(producto: Producto) {
    const actual = this.items.getValue();
    const existe = actual.find(i => i.producto.id === producto.id);
    if (existe) {
      existe.cantidad++;
      this.items.next([...actual]);
    } else {
      this.items.next([...actual, { producto, cantidad: 1 }]);
    }
  }

  quitar(id: number) {
    const actual = this.items.getValue();
    const existe = actual.find(i => i.producto.id === id);
    if (existe && existe.cantidad > 1) {
      existe.cantidad--;
      this.items.next([...actual]);
    } else {
      this.items.next(actual.filter(i => i.producto.id !== id));
    }
  }

  get total(): number {
    return this.items.getValue().reduce((s, i) => s + i.producto.precio * i.cantidad, 0);
  }

  get cantidad(): number {
    return this.items.getValue().reduce((s, i) => s + i.cantidad, 0);
  }

  limpiar() {
    this.items.next([]);
  }
}