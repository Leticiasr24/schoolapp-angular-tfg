import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-datosboletin',
  templateUrl: 'datosboletin.component.html',
  styleUrls: ['datosboletin.component.css'],
})
export class Datosboletin {
  @Input()
  text2: string = 'Grupo: B'
  @Input()
  text9: string = 'Año escolar: 2019/2020    '
  @Input()
  text3: string = 'DNI: 45365704K'
  @Input()
  text: string = 'Alumno: Leticia Esther Santana Robaina'
  @Input()
  text6: string = 'Email alumno: robainaleti@gmail.com'
  @Input()
  text10: string = 'Tutora: Estefanía Morales De La Hoz             '
  @Input()
  text5: string = 'Dirección: Urbanización El Lasso Bloque 14 Puerta 4      '
  @Input()
  text7: string = 'Email padre/madre: duniaroma@gmail.com'
  @Input()
  text11: string = 'Número de lista:  22                 '
  @Input()
  rootClassName: string = ''
  @Input()
  text4: string = 'Código Postal: 35016'
  @Input()
  text8: string = 'Teléfono: 619613728/658792030          '
  @Input()
  text1: string = 'Curso: 4º'
  constructor() {}
}
