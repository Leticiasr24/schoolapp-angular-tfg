import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-nuevorecordatorio',
  templateUrl: 'nuevorecordatorio.component.html',
  styleUrls: ['nuevorecordatorio.component.css'],
})
export class Nuevorecordatorio {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Nuevorecordatorio - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Nuevorecordatorio - SchoolApp',
      },
    ])
  }
}
