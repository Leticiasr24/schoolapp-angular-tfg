import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-tablonanuncios',
  templateUrl: 'tablonanuncios.component.html',
  styleUrls: ['tablonanuncios.component.css'],
})
export class Tablonanuncios {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Tablonanuncios - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Tablonanuncios - SchoolApp',
      },
    ])
  }
}
