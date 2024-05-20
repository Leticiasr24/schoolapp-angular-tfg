import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-buscaralumno',
  templateUrl: 'buscaralumno.component.html',
  styleUrls: ['buscaralumno.component.css'],
})
export class Buscaralumno {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Buscaralumno - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Buscaralumno - SchoolApp',
      },
    ])
  }
}
