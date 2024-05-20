import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-alumnocurso',
  templateUrl: 'alumnocurso.component.html',
  styleUrls: ['alumnocurso.component.css'],
})
export class Alumnocurso {
  @Input()
  text: string = 'Leticia Esther Santana Robaina'
  constructor() {}
}
