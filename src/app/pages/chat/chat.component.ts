import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css'],
})
export class Chat {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Chat - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Chat - SchoolApp',
      },
    ])
  }
}
