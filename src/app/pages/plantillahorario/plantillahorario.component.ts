import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-plantillahorario',
  templateUrl: 'plantillahorario.component.html',
  styleUrls: ['plantillahorario.component.css'],
})
export class Plantillahorario {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Plantillahorario - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Plantillahorario - SchoolApp',
      },
    ])
  }
}
