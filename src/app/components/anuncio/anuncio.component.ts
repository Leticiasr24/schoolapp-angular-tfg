import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-anuncio',
  templateUrl: 'anuncio.component.html',
  styleUrls: ['anuncio.component.css'],
})
export class Anuncio {
  @Input()
  button: string = 'Añadir a recordatorios'
  @Input()
  text: string = 'Estefanía Morales de la Hoz:'
  @Input()
  text2: string = 'Lengua castellana y literatura'
  @Input()
  text1: string = 'Recordatorio de examen el próximo 20 de enero.'
  constructor() {}
}
