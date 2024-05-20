import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-recordatorio',
  templateUrl: 'recordatorio.component.html',
  styleUrls: ['recordatorio.component.css'],
})
export class Recordatorio {
  @Input()
  button: string = 'Eliminar'
  @Input()
  text: string = 'Examen de Lengua el día 20 de enero'
  constructor() {}
}
