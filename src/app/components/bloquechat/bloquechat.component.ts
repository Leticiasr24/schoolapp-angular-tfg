import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-bloquechat',
  templateUrl: 'bloquechat.component.html',
  styleUrls: ['bloquechat.component.css'],
})
export class Bloquechat {
  @Input()
  textinputPlaceholder: string = 'Mensaje'
  @Input()
  text4: string = 'Lengua Castellana y Literatura'
  @Input()
  text2: string = '¿Sería en el departamento?'
  @Input()
  text: string =
    'Buenos días, estoy disponible martes a las 11 y viernes a la hora del recreo. Si no ya sería para la semana siguiente'
  @Input()
  text1: string = 'El viernes a la hora del recreo me viene bien. Gracias'
  @Input()
  text3: string = 'Sí, nos vemos el viernes!'
  @Input()
  text5: string =
    'Hola buenas, era para ver si podíamos tener una tutoría para revisar el último examen.'
  @Input()
  rootClassName: string = ''
  @Input()
  imageAlt: string = 'image'
  @Input()
  imageSrc: string = '/assets/icono_profesora-200h.png'
  raw2ydn: string = ' '
  raw310v: string = ' '
  constructor() {}
}
