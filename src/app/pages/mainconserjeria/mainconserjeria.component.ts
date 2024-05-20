import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-mainconserjeria',
  templateUrl: 'mainconserjeria.component.html',
  styleUrls: ['mainconserjeria.component.css'],
})
export class Mainconserjeria {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Mainconserjeria - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Mainconserjeria - SchoolApp',
      },
    ])
  }
}
