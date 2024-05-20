import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Nuevorecordatorio } from './nuevorecordatorio.component'

const routes = [
  {
    path: '',
    component: Nuevorecordatorio,
  },
]

@NgModule({
  declarations: [Nuevorecordatorio],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Nuevorecordatorio],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NuevorecordatorioModule {}
