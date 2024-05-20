import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-mainalumno',
  templateUrl: 'mainalumno.component.html',
  styleUrls: ['mainalumno.component.css'],
})
export class Mainalumno {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Mainalumno - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Mainalumno - SchoolApp',
      },
    ])
  }
}
