import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-usuariochat',
  templateUrl: 'usuariochat.component.html',
  styleUrls: ['usuariochat.component.css'],
})
export class Usuariochat {
  @Input()
  imageSrc: string = '/assets/icono_profesora-200h.png'
  @Input()
  text1: string = 'Lengua Castellana'
  @Input()
  rootClassName: string = ''
  @Input()
  text: string = 'Estefanía Morales'
  @Input()
  imageAlt: string = 'image'
  constructor() {}
}
