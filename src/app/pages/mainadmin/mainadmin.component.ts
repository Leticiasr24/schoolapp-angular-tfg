import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-mainadmin',
  templateUrl: 'mainadmin.component.html',
  styleUrls: ['mainadmin.component.css'],
})
export class Mainadmin {
  raw55yj: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Mainadmin - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Mainadmin - SchoolApp',
      },
    ])
  }
}
