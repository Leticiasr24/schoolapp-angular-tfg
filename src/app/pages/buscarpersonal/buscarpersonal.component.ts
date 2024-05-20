import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-buscarpersonal',
  templateUrl: 'buscarpersonal.component.html',
  styleUrls: ['buscarpersonal.component.css'],
})
export class Buscarpersonal {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Buscarpersonal - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Buscarpersonal - SchoolApp',
      },
    ])
  }
}
