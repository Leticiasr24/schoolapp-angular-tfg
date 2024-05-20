import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-mensajesenviados',
  templateUrl: 'mensajesenviados.component.html',
  styleUrls: ['mensajesenviados.component.css'],
})
export class Mensajesenviados {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Mensajesenviados - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Mensajesenviados - SchoolApp',
      },
    ])
  }
}
