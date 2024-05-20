import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-usuarioalumno',
  templateUrl: 'usuarioalumno.component.html',
  styleUrls: ['usuarioalumno.component.css'],
})
export class Usuarioalumno {
  @Input()
  rootClassName: string = ''
  @Input()
  imageSrc: string = '/assets/icono_profesora-200h.png'
  @Input()
  text: string = 'Leticia Santana'
  @Input()
  imageAlt: string = 'image'
  @Input()
  text1: string = '1ºA'
  constructor() {}
}
