import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-horario',
  templateUrl: 'horario.component.html',
  styleUrls: ['horario.component.css'],
})
export class Horario {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Horario - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Horario - SchoolApp',
      },
    ])
  }
}
