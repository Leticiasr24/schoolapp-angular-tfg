import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-altaempleado',
  templateUrl: 'altaempleado.component.html',
  styleUrls: ['altaempleado.component.css'],
})
export class Altaempleado {
  constructor(private title: Title, private meta: Meta) {
    /* this.title.setTitle('Altaempleado - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Altaempleado - SchoolApp',
      },
    ]) */
    console.log("Hola");
  }
}
