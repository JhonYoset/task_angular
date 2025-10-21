import { Component } from '@angular/core';

interface Tarea {
  nombre: string;
  responsable: string;
  prioridad: 'ALTA' | 'MEDIA' | 'BAJA';
  estado: 'Pendiente' | 'Completada';
}

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent {
  mostrarSoloAlta: boolean = false
  toggleFiltroAlta() {
    this.mostrarSoloAlta = !this.mostrarSoloAlta;
  }

  tareas: Tarea[] = [
    {
      nombre: 'Revisión de contratos',
      responsable: 'Laura',
      prioridad: 'ALTA',
      estado: 'Pendiente',
    },
    {
      nombre: 'Actualización de base de datos',
      responsable: 'Pedro',
      prioridad: 'MEDIA',
      estado: 'Completada',
    },

    {
      nombre: 'Soporte a clientes',
      responsable: 'Diego',
      prioridad: 'BAJA',
      estado: 'Completada',
    },
    {
      nombre: 'Soporte a Técnico',
      responsable: 'Jhon',
      prioridad: 'MEDIA',
      estado: 'Pendiente',
    },
    {
      nombre: 'Presentación de resultados',
      responsable: 'Ana',
      prioridad: 'ALTA',
      estado: 'Pendiente',
    },
  ];
}
