import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-mainpadres',
  templateUrl: 'mainpadres.component.html',
  styleUrls: ['mainpadres.component.css'],
})
export class Mainpadres {
  raw3yoq: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Mainpadres - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Mainpadres - SchoolApp',
      },
    ])
  }
}
