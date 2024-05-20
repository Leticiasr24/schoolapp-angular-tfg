import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Chat } from './chat.component'

const routes = [
  {
    path: '',
    component: Chat,
  },
]

@NgModule({
  declarations: [Chat],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Chat],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChatModule {}
