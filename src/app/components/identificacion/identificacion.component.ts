import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-identificacion',
  templateUrl: 'identificacion.component.html',
  styleUrls: ['identificacion.component.css'],
})
export class Identificacion {
  @Input()
  heading: string = 'Servicio de identificación'
  @Input()
  text1: string = 'Introduce tu contraseña'
  @Input()
  textinputPlaceholder1: string = '********'
  @Input()
  button: string = 'Iniciar Sesión'
  @Input()
  text: string = 'Introduce tu correo electrónico'
  @Input()
  textinputPlaceholder: string = 'micorreo@gmail.com'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
