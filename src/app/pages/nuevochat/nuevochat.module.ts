import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Nuevochat } from './nuevochat.component'

const routes = [
  {
    path: '',
    component: Nuevochat,
  },
]

@NgModule({
  declarations: [Nuevochat],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Nuevochat],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NuevochatModule {}
