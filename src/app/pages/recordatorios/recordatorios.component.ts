import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-recordatorios',
  templateUrl: 'recordatorios.component.html',
  styleUrls: ['recordatorios.component.css'],
})
export class Recordatorios {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Recordatorios - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Recordatorios - SchoolApp',
      },
    ])
  }
}
