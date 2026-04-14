export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
}

export const PRODUCTOS: Producto[] = [
  { id: 1, nombre: 'Anillo Eternidad', categoria: 'anillos', precio: 89000, imagen: '💍' },
  { id: 2, nombre: 'Anillo Solitario Piedra Blanca', categoria: 'anillos', precio: 120000, imagen: '💎' },
  { id: 3, nombre: 'Collar Gargantilla Serpiente', categoria: 'collares', precio: 140000, imagen: '✨' },
  { id: 4, nombre: 'Collar Corazón Partido', categoria: 'collares', precio: 110000, imagen: '❤️' },
  { id: 5, nombre: 'Pulsera Eslabón Cubano', categoria: 'pulseras', precio: 130000, imagen: '⛓️' },
  { id: 6, nombre: 'Pulsera Charm Personalizable', categoria: 'pulseras', precio: 85000, imagen: '🪬' },
  { id: 7, nombre: 'Aretes Argolla Grande', categoria: 'aretes', precio: 65000, imagen: '⭕' },
  { id: 8, nombre: 'Aretes Gota con Piedra', categoria: 'aretes', precio: 88000, imagen: '💧' },
  { id: 9, nombre: 'Tobillera Bolitas de Oro', categoria: 'tobilleras', precio: 60000, imagen: '🟡' },
  { id: 10, nombre: 'Tobillera con Dije Estrella', categoria: 'tobilleras', precio: 68000, imagen: '⭐' },
];