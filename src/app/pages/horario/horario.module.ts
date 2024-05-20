import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Horario } from './horario.component'

const routes = [
  {
    path: '',
    component: Horario,
  },
]

@NgModule({
  declarations: [Horario],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Horario],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HorarioModule {}
