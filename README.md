# Panel de Tareas del Equipo

Este proyecto es una aplicación sencilla construida con Angular que permite gestionar una lista de tareas de un equipo. Se utiliza una combinación de directivas estructurale!
s y de atributo, junto con una directiva personalizada para resaltar tareas urgentes.

## Descripción

La aplicación muestra un panel con una lista de tareas que tienen diferentes estados (por ejemplo, "Pendiente", "En Progreso", "Completada"). Cada tarea puede estar resaltada si tiene un estado urgente. Se implementan directivas personalizadas para modificar la apariencia de las tareas y utilizar directivas estructurales y de atributo para mostrar los elementos condicionalmente.

## Funcionalidades

* Directiva personalizada ResaltarUrgenteDirective: Resalta las tareas con un estado urgente.

* Directivas estructurales (*ngFor, *ngIf): Para iterar sobre las tareas y mostrarlas condicionalmente.

* Directivas de atributo ([ngClass]): Para agregar clases dinámicamente y modificar el estilo de las tareas.

## Estructura del Proyecto
### Componente Principal

* TareasComponent: El componente principal que maneja la lista de tareas.

### Directiva Personalizada
* ResaltarUrgenteDirective: Directiva personalizada para aplicar estilos específicos a las tareas urgentes.
