import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
  // @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzServices: DbzService){}

  agregar() {
    if (this.nuevo.nombre.trim().length == 0) {
      return;
    }
    console.log(this.nuevo);
    // this.nuevoPersonaje.emit(this.nuevo)
    this.dbzServices.agregarPersonajes(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
