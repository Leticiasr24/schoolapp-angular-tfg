import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-cursos',
  templateUrl: 'cursos.component.html',
  styleUrls: ['cursos.component.css'],
})
export class Cursos {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Cursos - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Cursos - SchoolApp',
      },
    ])
  }
}
