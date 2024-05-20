import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-nuevochat',
  templateUrl: 'nuevochat.component.html',
  styleUrls: ['nuevochat.component.css'],
})
export class Nuevochat {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Nuevochat - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Nuevochat - SchoolApp',
      },
    ])
  }
}
