import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-userwelcome',
  templateUrl: 'userwelcome.component.html',
  styleUrls: ['userwelcome.component.css'],
})
export class Userwelcome {
  @Input()
  text: string = 'Leticia Santana Robaina'
  @Input()
  h1: string = 'Últ. vez 05/12/2023'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
