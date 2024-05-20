import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-headerlogin',
  templateUrl: 'headerlogin.component.html',
  styleUrls: ['headerlogin.component.css'],
})
export class Headerlogin {
  @Input()
  imageAlt: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  imageSrc: string = '/assets/logoapp1-200w.jpeg'
  constructor() {}
}
