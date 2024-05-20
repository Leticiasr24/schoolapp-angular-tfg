import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-boletines',
  templateUrl: 'boletines.component.html',
  styleUrls: ['boletines.component.css'],
})
export class Boletines {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Boletines - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Boletines - SchoolApp',
      },
    ])
  }
}
