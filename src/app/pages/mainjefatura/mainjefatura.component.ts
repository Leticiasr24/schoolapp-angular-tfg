import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-mainjefatura',
  templateUrl: 'mainjefatura.component.html',
  styleUrls: ['mainjefatura.component.css'],
})
export class Mainjefatura {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Mainjefatura - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Mainjefatura - SchoolApp',
      },
    ])
  }
}
