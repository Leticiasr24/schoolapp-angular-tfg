import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-mainprofesores',
  templateUrl: 'mainprofesores.component.html',
  styleUrls: ['mainprofesores.component.css'],
})
export class Mainprofesores {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Mainprofesores - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Mainprofesores - SchoolApp',
      },
    ])
  }
}
