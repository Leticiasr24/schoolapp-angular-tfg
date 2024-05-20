import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Editarboletn } from './editarboletn.component'

const routes = [
  {
    path: '',
    component: Editarboletn,
  },
]

@NgModule({
  declarations: [Editarboletn],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Editarboletn],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EditarboletnModule {}
