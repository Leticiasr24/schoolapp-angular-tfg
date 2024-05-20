import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-incidencias',
  templateUrl: 'incidencias.component.html',
  styleUrls: ['incidencias.component.css'],
})
export class Incidencias {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Incidencias - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Incidencias - SchoolApp',
      },
    ])
  }
}
