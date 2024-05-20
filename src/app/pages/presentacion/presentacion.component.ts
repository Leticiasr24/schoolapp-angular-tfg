import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-presentacion',
  templateUrl: 'presentacion.component.html',
  styleUrls: ['presentacion.component.css'],
})
export class Presentacion {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Presentacion - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Presentacion - SchoolApp',
      },
    ])
  }
}
